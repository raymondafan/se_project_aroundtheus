import "../pages/index.css";

//import all the classes
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import { initialCards, selectors, config } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/api.js";

//Elements
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = previewImageModal.querySelector(".modal__image");
const previewImageModalTitle = previewImageModal.querySelector(".modal__title");
const addCardModal = document.querySelector("#add-card-modal");
// const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
// const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
// const previewImageModalCloseButton =
//   previewImageModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector(".modal__form");
// const cardListEl = document.querySelector(".cards__list");
// const cardTemplate =
//   document.querySelector("#card-template").content.firstElementChild;
const addNewCardButton = document.querySelector(".profile__add-button");
// const cardTitleInput = addCardFormElement.querySelector("#form-input-title");
// const cardUrlInput = addCardFormElement.querySelector("#form-input-url");

function handlerProfileEditSubmit({ name, job }) {
  userInfo.setUserInfo(name, job);
  editCardPopup.close();
}
function handleAddCardFormSubmit(inputValues) {
  const card = createCard(inputValues);
  cardList.addItem(card);
  addCardFormElement.reset();
  newCardPopup.close();
}

function handleImageClick(data) {
  previewImage.src = data.link;
  previewImage.alt = `Photo of ${data.name}`;
  previewImageModalTitle.textContent = data.name;
  cardPreviewModal.open();
}

//new instances

//form validation instance
const addCardValidator = new FormValidator(config, addCardFormElement);
const addEditProfileValidator = new FormValidator(config, profileEditForm);
addCardValidator.enableValidation();
addEditProfileValidator.enableValidation();
//new card instance
const newCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleAddCardFormSubmit
);

newCardPopup.setEventListeners();
addNewCardButton.addEventListener("click", () => {
  addCardValidator.toggleButtonState();
  newCardPopup.open();
});
//edit cards instace
const editCardPopup = new PopupWithForm(
  "#profile-edit-modal",
  handlerProfileEditSubmit
);

editCardPopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileTitleInput.value= userData.name;
  profileDescriptionInput.value= userData.job;
  editCardPopup.open();
});

//preview image instance
const cardPreviewModal = new PopupWithImage(selectors.previewModal);
cardPreviewModal.setEventListeners();

const createCard = (data) => {
  const cardEl = new Card(
    {
      name: data.name,
      link: data.link,
      handleImageClick: (imgData) => {
        cardPreviewModal.open(imgData);
      },
    },
    selectors.cardTemplate
  );

  return cardEl.getView();
};
// section instance
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  selectors.cardSection
);
cardList.renderItems(initialCards);
//userinfo instance
const userInfo = new UserInfo(profileTitle, profileDescription);

fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
  headers: {
    authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
    "Content-Type": "application/json"
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });





// fetch("https://around-api.en.tripleten-services.com/v1/users/me/avatar", {
//   method: "PATCH",
//   headers: {
//     authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Marie Skłodowska Curie",
//     link: "Physicist and Chemist"
//   })
// });


const api = new Api ({});
api.usersInfo();
api.addCard();
api.getCard();