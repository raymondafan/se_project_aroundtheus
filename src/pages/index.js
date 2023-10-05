import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

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


//functions
// function getCardElement(cardData) {
// const cardElement = cardTemplate.cloneNode(true);
// const cardImageEl = cardElement.querySelector(".card__image");
// const cardTitleEl = cardElement.querySelector(".card__title");
// const likeButton = cardElement.querySelector(".card__like-button");
// const cardTrashButton = cardElement.querySelector(".card__trash-button");

// likeButton.addEventListener("click", handleLikeIcon);
// cardTrashButton.addEventListener("click", handleRemoveIcon);
// cardImageEl.addEventListener("click", () => {
//   previewImage.src = cardData.link;
//   previewImage.alt = `Photo of ${cardData.name}`;
//   previewImageModalTitle.textContent = cardData.name;
//   openPopup(previewImageModal);
// });

// cardImageEl.src = cardData.link;
// cardImageEl.alt = cardData.name;

// cardTitleEl.textContent = cardData.name;

// return cardElement;
// }

//Event Handlersl
// const handleLikeIcon = (e)=>{
//   e.target.classList.toggle("card__like-button_active");
// };
// const handleRemoveIcon = (e)=>{
//   e.target.closest(".card").remove();
// };
function handlerProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}
function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  addCardFormElement.reset();

  closePopup(addCardModal);
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

function renderCard(cardData, wrapper) {
  const card = new Card(cardData, "#card-template", handleImageClick);

  // const cardElement = getCardElement(cardData);
  wrapper.prepend(card.getView());
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
profileEditForm.addEventListener("submit", handlerProfileEditSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
//new cards
addNewCardButton.addEventListener("click", () => {
  addCardValidator.toggleButtonState();
  openPopup(addCardModal);
});
addCardModalCloseButton.addEventListener("click", () =>
  closePopup(addCardModal)
);

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
const config = {
  formSelector: ".modal__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "popup__error_visible",
};
// const addCardForm= document.querySelector("#add-card-form");

const addCardValidator = new FormValidator(config, addCardFormElement);
const addEditProfileValidator = new FormValidator(config, profileEditForm);
addCardValidator.enableValidation();
addEditProfileValidator.enableValidation();
const newCardPopup = new PopupWithForm("#add-card-modal", handleAddCardFormSubmit);
newCardPopup.open();
newCardPopup.close();
const CardSection= new Section({
  renderer: (item)=>{

  },
});
