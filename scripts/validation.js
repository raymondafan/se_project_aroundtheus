// enabling validation by calling enableValidation()
// pass all the settings on call
function showInputError(formElement, inputElement, options){
const errorMessageElement= 
}
function checkInputValidity(formElement, inputElement, options){
if (!inputElement.validity){
  showInputError(formElement, inputElement, options);
} else{
  hideInputError(formElement, inputElement, options);
 }
}
function setEventListeners(formElement, options){
  const {inputSelector}= options;
  const inputElements= [...formElement.querySelectorAll(inputSelector)];
inputElements.forEach(inputElement =>{
  inputElement.addEventListener("input", (e)=> {
    checkInputValidity(formElement, inputElement,options)
console.log(inputElement.validationMessage);
  });
});
}
function enableValidation(options) {
  const formElements= [...document.querySelectorAll(options.formSelector)];
  formElements.forEach((formElement)=>{
formElement.addEventListener("submit", (e)=>{
  e.preventDefault();
});
setEventListeners(formElement, options);
// look for all inputs inside of the form
// loop thru all inputs to see if all are valid
// if input isnt valid
// we need to grab validation message
// add error class to input
// display error message
// disable button
//if all inputs valid
//enable button
//reset error messages

  });
}

const config= {
  formSelector: ".modal__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

enableValidation(config);