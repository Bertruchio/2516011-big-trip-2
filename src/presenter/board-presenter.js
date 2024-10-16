import TripInfoView from '../view/trip-info-view.js';
import TripFilterView from '../view/trip-filter-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import TripEventsItemView from '../view/trip-events-item-view.js';
import SortView from '../view/trip-sort-view.js';
//import EventEditorView from '../view/event-editor-view.js';
import TripPointView from '../view/trip-point-view.js';
import MessageView from '../view/message-view.js';

import { render, RenderPosition } from '../framework/render.js';

const siteMainElement = document.querySelector('.page-header');
const siteHeaderElement = siteMainElement.querySelector('.trip-main');
const siteFilterElement = siteMainElement.querySelector('.trip-controls__filters');

export default class BoardPresenter {
  #container = null;
  #pointsModel = null;

  #pointsWithDetails = [];
  #listComponent = new TripEventsListView();

  constructor({ container, pointsModel }) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    render(new TripInfoView(), siteHeaderElement, RenderPosition.AFTERBEGIN);
    render(new TripFilterView(), siteFilterElement);

    render(this.#listComponent, this.#container);
    render(new SortView(), this.#listComponent.element);

    this.#pointsModel.init();
    this.#pointsWithDetails = this.#pointsModel.pointsWithDetails;

    for (const pointWithDetails of this.#pointsWithDetails) {
      this.#renderTripPoint(pointWithDetails);
    }
  }

  #renderTripPoint(point) {
    const tripPointItem = new TripEventsItemView();
    render(tripPointItem, this.#listComponent.element);
    render(new TripPointView(point, point.offers), tripPointItem.element);
  }
}
