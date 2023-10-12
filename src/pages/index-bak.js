import "../pages/index.css";
//import all the classes
import { initialCards, selectors } from "../components/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";

//create instances of the classes
// const CardPreviewModal = new PopupWithImage(selectors.previewModal);
const createCard =  (data) => {
      const cardEl = new Card(
        {
          data,
          handleImageClick: (imgData) => {
            CardPreviewModal.open(imgData);
          },
        },
        selectors.cardTemplate
      );
     return cardEl.getView();
    }

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItems(createCard(item))
    },
  },
  selectors.cardSection
);
cardList.renderItems(initialCards);
// initialize all my instances

const CardPreviewModal = new PopupWithImage(selectors.previewModal);
CardPreviewModal.setEventListeners();

// all the rest
