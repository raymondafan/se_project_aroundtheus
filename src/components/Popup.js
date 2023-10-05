export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._open = this.open.bind(this);
    this._close = this.close.bind(this);
    this._closeButton = document.querySelector(".modal__close");
  }
  open() {
    console.log(this);
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose = (e) => {
    console.log(this);
    if (e.key === "Escape") {
      this.close();
    }
  };
  closeOutsideClick = (e) => {
    if (
      e.target === e.currentTarget ||
      e.target.classList.contains("modal__close")
    ) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", this.closeOutsideClick);
    this._closeButton.addEventListener("click", this.close);
  }
}
