export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link= link;
    this._cardSelector= cardSelector;

  }
  _setEventListeners(){
this._cardElement.querySelector(".card__like-button").addEventListener("click", ()=>{
  this._handleLikeIcon();
})


//".card__trash-button"
const cardTrashButton= this._cardElement.querySelector(".card__trash-button")
  }
  _handleLikeIcon(){
    this._cardElement
    .querySelector(".card__like-button")
    .classList.toggle(".card__like-button_active");
  }

  getView() {
    this._cardElement = document
    .querySelector(this._cardSelector)
    .content.querySelector(".card")
    .cloneNode(true);
console.log(this._cardElement);

    //get the card view
    this._setEventListeners();
    // return card
  }
}
