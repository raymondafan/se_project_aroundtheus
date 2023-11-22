import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, submitButtonText) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._submitButton= this._popupElement.querySelector(".modal__button");
    this._submitButtonText=  this._submitButton.textContent;
  }
  setLoadingText(isLoading) {

    if (isLoading) {
       this._submitButton.textContent= "Saving..."
    } else {
       this._submitButton.textContent = this._submitButtonText;
    }
  }
  setSubmitAction(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
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
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
}

//index.js
