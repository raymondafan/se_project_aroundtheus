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
  open() {
    super.open();
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
    });
    super.setEventListeners();
  }
}

//index.js
