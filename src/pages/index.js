import "../pages/index.css";

//import all the classes
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import { initialCards, selectors, config } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

//Elements
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = previewImageModal.querySelector(".modal__image");
const previewImageModalTitle = previewImageModal.querySelector(".modal__title");
const addCardModal = document.querySelector("#add-card-modal");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const previewImageModalCloseButton =
  previewImageModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const addNewCardButton = document.querySelector(".profile__add-button");
const cardTitleInput = addCardFormElement.querySelector("#form-input-title");
const cardUrlInput = addCardFormElement.querySelector("#form-input-url");


function handlerProfileEditSubmit({ name, job }) {
  userInfo.setUserInfo(name, job);
  closePopup(profileEditModal);
}
function handleAddCardFormSubmit(inputValues) {
  console.log(inputValues);

  const card = createCard(inputValues);
  cardList.addItem(card);
  addCardFormElement.reset();
  closePopup(addCardModal);
  // userInfo.getUserInfo();
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", escPopup);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", escPopup);
}

function handleImageClick(data) {
  previewImage.src = data.link;
  previewImage.alt = `Photo of ${data.name}`;
  previewImageModalTitle.textContent = data.name;
  openPopup(previewImageModal);
}



function escPopup(e) {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    if (modal) closePopup(modal);
  }
}
function closeModalOnRemoteClick(e) {
  if (
    e.target === e.currentTarget ||
    e.target.classList.contains("modal__close")
  ) {
    closePopup(e.target);
  }
}

// Event Listeners

profileEditModal.addEventListener("mousedown", closeModalOnRemoteClick);

addCardModal.addEventListener("mousedown", closeModalOnRemoteClick);

previewImageModal.addEventListener("mousedown", closeModalOnRemoteClick);

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});
profileEditCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);

previewImageModalCloseButton.addEventListener("click", () => {
  closePopup(previewImageModal);
});
//form listeners

//new cards
addNewCardButton.addEventListener("click", () => {
  addCardValidator.toggleButtonState();
  openPopup(addCardModal);
});
addCardModalCloseButton.addEventListener("click", () =>
  closePopup(addCardModal)
);



const addCardValidator = new FormValidator(config, addCardFormElement);
const addEditProfileValidator = new FormValidator(config, profileEditForm);
addCardValidator.enableValidation();
addEditProfileValidator.enableValidation();
const newCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleAddCardFormSubmit
);
const editCardPopup = new PopupWithForm(
  "#profile-edit-modal",
  handlerProfileEditSubmit
);

newCardPopup.setEventListeners();
editCardPopup.setEventListeners();

const CardPreviewModal = new PopupWithImage(selectors.previewModal);
CardPreviewModal.setEventListeners();

const createCard = (data) => {
  const cardEl = new Card(
    {
      name: data.name,
      link: data.link,
      handleImageClick: (imgData) => {
        CardPreviewModal.open(imgData);
      },
    },
    selectors.cardTemplate
  );

  return cardEl.getView();
};

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

const userInfo = new UserInfo(profileTitle, profileDescription);
