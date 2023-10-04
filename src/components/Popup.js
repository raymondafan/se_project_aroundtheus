export default class Popup {
  constructor({popupSelector}){
    this._popupElement = document.querySelector(popupSelector);
    // this._closeModalClick=
  }
  open(){
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close(){
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose = (e)=>{
    if (e.key === "Escape") {
     this.close();
    }
  }
  closeButton(){

  }
  setEventListeners(){
// sets event listeners
// profileEditForm.addEventListener("submit", handlerProfileEditSubmit);
  }
}