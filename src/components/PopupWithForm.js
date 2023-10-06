import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }
  close() {
    this._popupForm.reset();
    super.close();
  }
  _handleFormSubmit= (e)=> {
    e.preventDefault();
    this.name = cardTitleInput.value;
    this.link = cardUrlInput.value;

    this.close();
  }
}

//index.js
