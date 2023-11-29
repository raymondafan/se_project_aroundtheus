import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._imageElement = this._popupElement.querySelector(".modal__image");
    this._titleElement = this._popupElement.querySelector(".modal__title");
  }
  open(name, link) {
    this._imageElement.src = link;
    this._imageElement.alt = `Photo of ${link}`;
    this._titleElement.textContent = name;
    super.open();
  }

  // setEventListeners() {
  //   super.setEventListeners();
  // }
}
