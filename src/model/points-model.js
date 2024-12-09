import Observable from '../framework/observable.js';
import { mockDestinations } from '../mock/destinations.js';
import { mockOffers } from '../mock/offers.js';

export default class PointsModel extends Observable {
  #pointsApiService = null;
  #points = [];
  #pointsWithDetails = null;
  #destinations = null;
  #offers = null;

  constructor({pointsApiService}) {
    super();
    this.#pointsApiService = pointsApiService;
    this.#points = [];
    this.#pointsWithDetails = [];
    this.#destinations = [];
    this.#offers = [];
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  get points() {
    return this.#points;
  }

  get pointsWithDetails() {
    return this.#points.map((point) => {
      const destination = this.#destinations.find((dest) => dest.id === point.destination);
      const offersForType = this.#offers.find((offer) => offer.type === point.type)?.offers || [];
      const pointOffers = Array.isArray(point.offers) ? offersForType.filter((offer) => point.offers.includes(offer.id)) : [];

      return {
        ...point,
        destination: destination || null,
        typeOffers: offersForType,
        offers: pointOffers,
      };
    });
  }

  async init() {
    try {
      const points = await this.#pointsApiService.points;
      this.#points = points.map(this.#adaptToClient);
      console.log(this.#points);
    } catch(err) {
      this.#points = [];
    }
  }

  _extractBasePointData(point) {
    return {
      ...point,
      destination: point.destination?.id || null,
      offers: point.offers?.map((offer) => offer.id) || null,
    };
  }

  /**
   * Обновляет существующую точку маршрута.
   * @param {string} updateType - Тип обновления.
   * @param {object} update - Обновляемая точка маршрута.
   */
  updatePoint(updateType, update) {
    const index = this.#pointsWithDetails.findIndex((point) => point.id === update.id);
    if (index === -1) {
      throw new Error('Can\'t update non-existing point');
    }
    this.#pointsWithDetails = [
      ...this.#pointsWithDetails.slice(0, index),
      update,
      ...this.#pointsWithDetails.slice(index + 1),
    ];
    const baseUpdate = this._extractBasePointData(update);
    this.#points = [
      ...this.#points.slice(0, index),
      baseUpdate,
      ...this.#points.slice(index + 1),
    ];
    this._notify(updateType, update);
  }

  /**
   * Добавляет новую точку маршрута.
   * @param {string} updateType - Тип обновления.
   * @param {object} update - Новая точка маршрута.
   */
  addPoint(updateType, update) {
    this.#pointsWithDetails = [
      update,
      ...this.#pointsWithDetails,
    ];
    const baseUpdate = this._extractBasePointData(update);
    this.#points = [
      baseUpdate,
      ...this.#points,
    ];
    this._notify(updateType, update);
  }

  /**
   * Удаляет существующую точку маршрута.
   * @param {string} updateType - Тип обновления.
   * @param {object} update - Удаляемая точка маршрута.
   */
  deletePoint(updateType, update) {
    const index = this.#pointsWithDetails.findIndex((point) => point.id === update.id);
    if (index === -1) {
      throw new Error('Can\'t delete non-existing point');
    }
    this.#pointsWithDetails = [
      ...this.#pointsWithDetails.slice(0, index),
      ...this.#pointsWithDetails.slice(index + 1),
    ];
    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];
    this._notify(updateType);
  }

  #adaptToClient(point) {
    const adaptedPoint = {...point,
      basePrice: point['base_price'],
      dateFrom: point['date_from'] !== null ? new Date(point['date_from']) : point['date_from'],
      dateTo: point['date_to'] !== null ? new Date(point['date_to']) : point['date_to'],
      isFavorite: point['is_favorite'],
    };

    delete adaptedPoint['base_price'];
    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['is_favorite'];
    return adaptedPoint;
  }
}
