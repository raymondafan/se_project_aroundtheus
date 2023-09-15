export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick, handlePreviewImage) { //cardSelector= #card-template
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector; //template
    this._handleImageClick= handleImageClick;
    this._handlePreviewImage= handlePreviewImage;
  }
  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
      this.cardImageEl.addEventListener("click", () => {
        this._handleImageClick({
          name: this._name,
          link: this._link,
        });
      });

    //".card__trash-button"
     this._cardElement
      .querySelector(".card__trash-button")
      .addEventListener("click", () => {
        this._handleRemoveCard();
      });
      this._cardElement
      .querySelector(".modal")
      .addEventListener("mousedown", () => {
       this._handlePreviewImage();
      });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }
_handleRemoveCard(){
  this._cardElement.remove();
  this._cardElement = null;
}
_handlePreviewImage(){
  if (this._cardElement.classList.contains("modal")) {
    closePopup("#preview-image-modal");
  }
}
  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
       this.cardImageEl = this._cardElement.querySelector(".card__image");
     this.cardTitleEl = this._cardElement.querySelector(".card__title");
this.cardImageEl.src=this._link
this.cardTitleEl.textContent= this._name
    //get the card view
    this._setEventListeners();
    // return card
    return this._cardElement
  }
}
