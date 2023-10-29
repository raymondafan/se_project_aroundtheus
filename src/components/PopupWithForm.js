import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, handleAddCardSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._handleAddCardSubmit = handleAddCardSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }
  close() {
    super.close();
    this._popupForm.reset();
  }

  _getInputValues() {
    const inputs = this._popupForm.querySelectorAll(".form__input");
    const inputValues = {};

    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      this._handleFormSubmit(this._getInputValues());
      this._handleAddCardSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
}

//index.js
