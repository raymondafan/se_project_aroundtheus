import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({popupSelector});
    this._imageElement = this._popupElement.querySelector(".modal__image");
    this._titleElement = this._popupElement.querySelector(".modal__title");
  }
  open(data) {
    this._imageElement.src = data.link;
    this._imageElement.alt = `Photo of ${data.link}`;
    this._titleElement.textContent = data.text;
    super.open();
  }
  setEventListeners() {
   
    super.setEventListeners();
  }
}
