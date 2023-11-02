export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    //use this._renderer to create elements for rendering
    items.reverse().forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    //take items and render it into this._element

    this._container.prepend(element);
  }
}
