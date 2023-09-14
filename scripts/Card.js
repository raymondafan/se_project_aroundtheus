export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick= handleImageClick;
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
        this._handleRemoveIcon();
      });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }
_handleRemoveIcon(){
  this._cardElement.remove();
  this._cardElement = null;
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
