export default class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  renderItems() {
    //use this._renderer to create elements for rendering
    this._items.forEach ((item) => {
        this._renderer(item);
    })
  }


  addItem(element) {
    //take items and render it into this._element

    this._container.prepend(element);
  }
}
