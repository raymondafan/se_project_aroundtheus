export default class Card {
  constructor(
    { id, isLiked, name, link, handleImageClick, handleRemoveCardClick, handleLikeIcon },
    cardSelector
  ) {
    //cardSelector= #card-template
    this._id = id;
    this._name = name;
    this._link = link;
    this._isLiked = isLiked;
    this._cardSelector = cardSelector; //template
    this._handleImageClick = handleImageClick;
    this._handleRemoveCardClick = handleRemoveCardClick;
    this._handleLikeIcon = handleLikeIcon;
  }

  getId() {
    return this._id;
  }

  setLikeStatus(status) {
    this._isLiked = status;
    this.renderLikes();
  }

  getLikeStatus() {
    return this._isLiked;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon(this)
      });
    this.cardImageEl.addEventListener("click", () => {
      this._handleImageClick(
    this._name,
    this._link,
      );
    });

    //".card__trash-button"
    this._cardElement
      .querySelector(".card__trash-button")
      .addEventListener("click", () => {
        this._handleRemoveCardClick();
      });
  }

  renderLikes() {
    if (this._isLiked){
this._cardElement
      .querySelector(".card__like-button")
      .classList.add("card__like-button_active");
    } else{
      this._cardElement
      .querySelector(".card__like-button")
      .classList.remove("card__like-button_active");
    }

  }
  handleRemoveCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _getElement() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }
  getView() {
    this._cardElement = this._getElement();
    this.cardImageEl = this._cardElement.querySelector(".card__image");
    this.cardTitleEl = this._cardElement.querySelector(".card__title");
    this.cardImageEl.src = this._link;
    this.cardImageEl.alt = `Photo of ${this._name}`;
    this.cardTitleEl.textContent = this._name;
    //get the card view
    this._setEventListeners();
    this.renderLikes();
    // return card
    return this._cardElement;
  }
}
