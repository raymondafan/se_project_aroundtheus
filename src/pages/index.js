import "../pages/index.css";

//import all the classes
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import { selectors, config } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

//Elements

const profilePictureModal = document.querySelector("#profile-picture-modal");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const previewImageModal = document.querySelector("#preview-image-modal");
const profilePicture = document.querySelector(".profile__image");
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
const profilePictureForm = profilePictureModal.querySelector(".modal__form");
// const cardListEl = document.querySelector(".cards__list");
// const cardTemplate =
//   document.querySelector("#card-template").content.firstElementChild;
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewPfpButton = document.querySelector(".profile__button-avatar");
// const cardTitleInput = addCardFormElement.querySelector("#form-input-title");
// const cardUrlInput = addCardFormElement.querySelector("#form-input-url");

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
    "Content-Type": "application/json",
  },
});

function handleProfileEditSubmit({ name, job }) {
  editCardPopup.renderLoading(true);
  api
    .profileInfo({ name, about: job })
    .then((userData) => {
      userInfo.setUserInfo(userData.name, userData.about);
      editCardPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      editCardPopup.renderLoading(false);
    });
}
function handleAddCardFormSubmit(inputValues) {
  newCardPopup.renderLoading(true);
  api
    .addCard(inputValues)
    .then((res) => {
      const card = createCard(res);
      cardList.addItem(card);
      addCardFormElement.reset();
      newCardPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      newCardPopup.renderLoading(false);
    });
}

function handleAddAvatarSubmit(inputValues) {
  newProfilePicturePopup.renderLoading(true);
  api
    .userAvatar(inputValues)
    .then(() => {
      profilePicture.src = inputValues.link;
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      newProfilePicturePopup.renderLoading(false);
    });
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
const addPfpValidator = new FormValidator(config, profilePictureForm);
addCardValidator.enableValidation();
addEditProfileValidator.enableValidation();
addPfpValidator.enableValidation();
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
  handleProfileEditSubmit
);

editCardPopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.name;
  profileDescriptionInput.value = userData.job;
  editCardPopup.open();
});
//new pfp instance
const newProfilePicturePopup = new PopupWithForm(
  "#profile-picture-modal",
  handleAddAvatarSubmit
);
newProfilePicturePopup.setEventListeners();

addNewPfpButton.addEventListener("click", () => {
  newProfilePicturePopup.open();
  addPfpValidator.toggleButtonState();
});
//remove card instance
const newRemoveCardModal = new PopupWithForm("#remove-card-modal");

newRemoveCardModal.setEventListeners();

//preview image instance
const cardPreviewModal = new PopupWithImage(selectors.previewModal);
cardPreviewModal.setEventListeners();

const createCard = (data) => {
  const cardEl = new Card(
    {
      id: data._id,
      isLiked: data.isLiked,
      name: data.name,
      link: data.link,
      handleImageClick: (imgData) => {
        cardPreviewModal.open(imgData);
      },

      handleRemoveCardClick: () => {
        const id = cardEl.getId();
        newRemoveCardModal.open();

        newRemoveCardModal.setSubmitAction(() => {
          newRemoveCardModal.renderLoading(true);
          api
            .deleteCard(id)
            .then((res) => {
              cardEl.handleRemoveCard(res);
            })
            .catch((err) => {
              console.error(err);
            })
            .finally(() => {
              newRemoveCardModal.renderLoading(false);
            });
        });
      },
      handleLikeIcon: (card) => {
        if (!card.getLikeStatus()) {
          return api
            .addLike(card._id)
            .then(() => {
              card.getLikeStatus(true);
            })
            .catch(console.err);
        } else {
          return api
            .removeLike(card._id)
            .then(() => {
              card.getLikeStatus(false);
            })
            .catch(console.err);
        }
      },
    },
    selectors.cardTemplate
  );

  return cardEl.getView();
};
// section instance
const cardList = new Section(
  {
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  selectors.cardSection
);

//userinfo instance
const userInfo = new UserInfo(profileTitle, profileDescription, profilePicture);

api
  .getInitialCards()
  .then((cards) => {
    cardList.renderItems(cards);
  })
  .catch((err) => {
    console.error(err);
  });

api.usersInfo().then((userData) => {
  userInfo.setUserInfo(userData.name, userData.about);
  userInfo.setAvatarInfo(userData.avatar);
});

// fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
//   // method: "PATCH",
//   headers: {
//     authorization: "7df31549-2772-46fa-8dab-555ea4e32993",
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });
