import "../pages/index.css";
//import all the classes
import { initialCards, selectors } from "../components/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";

//create instances of the classes
 const CardPreviewModal= new PopupWithImage(selectors.previewModal)
const CardSection = new Section({
  renderer: (item) => {
    const cardEl = new Card(item, selectors.cardTemplate, handleImageClick);
    CardSection.addItem(cardEl.getView());
  },
},
  selectors.cardSection
);

// initialize all my instances
CardSection.renderItems(initialCards);
CardPreviewModal.setEventListeners();
// all the rest
