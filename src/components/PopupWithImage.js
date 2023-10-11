import Popup from "./Popup.js";
export default class PopupWithImage extends Popup{
  constructor(popupSelector){
super(popupSelector);
this._imageElement = this._popupElement.querySelector(".card__image");
this._titleElement = this._popupElement.querySelector(".card__title");

  }
  open(data){

    this._popupElement
    this.cardImageEl.src = data.link;
    this.cardImageEl.alt = `Photo of ${data.link}`;
    this.cardTitleEl.textContent = data.text;
    super.open();
  }
  setEventListeners(){
    
  }
}