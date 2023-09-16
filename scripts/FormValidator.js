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
  _toggleButtonState(
    inputElements,
    submitButton,
    { inactiveButtonClass }
  ) {
    if (hasInvalidInput(this._inputElements)) {
      disableButton(submitButton, this._inactiveButtonClass);
      return;
    }
       enableButton(submitButton, this._inactiveButtonClass);



  }
  _setEventListeners(inputElements){
//data w in keyboard "keydown""keyup" etc
  this._inputElements = [...this._element.querySelectorAll(this._inputSelector)];
  this._submitButton = this._element.querySelector(this._submitButtonSelector);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      _checkInputValidity(formElement, inputElement, options);
      _toggleButtonState(inputElements, submitButton, options);
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

