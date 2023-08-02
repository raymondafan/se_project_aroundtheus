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
const addCardModal = document.querySelector("#add-card-modal");
const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
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
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardTrashButton = cardElement.querySelector(".card__trash-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  cardTrashButton.addEventListener("click", () => {
    cardElement.remove("card");
  });
  cardImageEl.addEventListener("click", () => {
    previewImage.src = cardData.link;
    openPopup(previewImageModal);

  });
  profileEditCloseButton.addEventListener("click", () => {
  closePopup(previewImageModal);
  });
  addCardModalCloseButton.addEventListener("click", () => {
    closePopup(addCardModal);
    });


  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;

  cardTitleEl.textContent = cardData.name;

  return cardElement;

  // add click listener to cardImage element
  //openModal with previewImageModal add it into html them find preview image modal in const
}

//Event Handlers
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
  closePopup(addCardModal);
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}
function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}
//Event Listeners
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});
profileEditCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);
//form listeners
profileEditForm.addEventListener("submit", handlerProfileEditSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
//new cards
addNewCardButton.addEventListener("click", () =>
  openPopup(addCardModal)
);
addCardModalCloseButton.addEventListener("click", () =>
  closePopup(addCardModal)
);

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
