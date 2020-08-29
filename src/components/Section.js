export default class Section {
  constructor({
    data,
    renderer
  }, containerSelector) {
    this._items = data;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._cardContainer = document.querySelector(this._containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._items.length > 1 ? this._cardContainer.append(element) : this._cardContainer.prepend(element);
  }
}
