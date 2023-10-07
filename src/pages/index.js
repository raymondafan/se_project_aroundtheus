import "../pages/index.css";
//import all the classes
import {initialCards, selectors} from "../components/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";

//create instances of the classes

const addCardValidator = new FormValidator(config, addCardFormElement);
const addEditProfileValidator = new FormValidator(config, profileEditForm);
addCardValidator.enableValidation();
addEditProfileValidator.enableValidation();
const config = {
  formSelector: ".modal__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "popup__error_visible",
};

const newCardPopup = new PopupWithForm("#add-card-modal", handleAddCardFormSubmit);
const EditCardPopup= new PopupWithForm("#add-card-modal", handlerProfileEditSubmit);
//newCardPopup.open();
//newCardPopup.close();
newCardPopup.setEventListeners();
EditCardPopup.setEventListeners();

const CardSection= new Section({
  renderer: (item)=>{
    const cardEl= new Card(item, selectors.cardTemplate);
    CardSection.addItem(cardEl.getView)
    },
  },
    selectors.CardSection

);

CardSection.renderItems(initialCards);

// initialize all my instances





// all the rest