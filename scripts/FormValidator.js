export default class FormValidator{
  constructor(config, formElement){
    this._inputSelector= config.inputSelector;
    this._submitButtonSelector= config.submitButtonSelector;
    this._inactiveButtonClass= config.inactiveButtonClass;
    this._inputErrorClass= config.inputErrorClass;
    this._errorClass= config.errorClass;
    this._element=formElement;

  }
  _showInputError(inputElement, errorMessage) {
    const errorElement= this._element.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent= errorMessage;
    errorElement.classList.add(this._errorClass);
  };
  _hideInputError(inputElement) {
  const errorElement= this._element.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent= "";
    errorElement.classList.remove(this._errorClass);
  };
  _checkInputValidity(inputElement){
    if (!inputElement.validity.valid) {
      return this._showInputError( inputElement);
    }
    this._hideInputError(inputElement);
  };
  _hasInvalidInput(inputList){
    return !inputList.every((inputElement) => inputElement.validity.valid);
  };
  _setEventListeners(){
//data w in keyboard "keydown""keyup" etc
const { inputSelector, submitButtonSelector} = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  const submitButton = formElement.querySelector(submitButtonSelector);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputElements, submitButton, options);
    });
  });
  };
  enableValidation(){ //plays roll of init method(public)
    this._element.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formElement, options);
  };
};

