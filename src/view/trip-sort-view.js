import AbstractView from '../framework/view/abstract-view';
import { SortType } from '../const.js';

function createTripSortTemplate() {
  return (`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <div class="trip-sort__item  trip-sort__item--${SortType.DAY}">
        <input id="sort-${SortType.DAY}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${SortType.DAY}" checked>
        <label class="trip-sort__btn" for="sort-${SortType.DAY}" data-sort-type="${SortType.DAY}">${SortType.DAY}</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--${SortType.EVENT}">
        <input id="sort-${SortType.EVENT}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${SortType.EVENT}" disabled>
        <label class="trip-sort__btn" for="sort-${SortType.EVENT}" data-sort-type="${SortType.EVENT}">${SortType.EVENT}</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--${SortType.TIME}">
        <input id="sort-${SortType.TIME}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${SortType.TIME}">
        <label class="trip-sort__btn" for="sort-${SortType.TIME}" data-sort-type="${SortType.TIME}">${SortType.TIME}</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--${SortType.PRICE}">
        <input id="sort-${SortType.PRICE}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${SortType.PRICE}">
        <label class="trip-sort__btn" for="sort-${SortType.PRICE}" data-sort-type="${SortType.PRICE}">${SortType.PRICE}</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--${SortType.OFFER}">
        <input id="sort-${SortType.OFFER}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${SortType.OFFER}" disabled>
        <label class="trip-sort__btn" for="sort-${SortType.OFFER}" data-sort-type="${SortType.OFFER}">${SortType.OFFER}</label>
      </div>
    </form>`);
}

export default class TripSortView extends AbstractView{
  get template() {
    return createTripSortTemplate();
  }
}
