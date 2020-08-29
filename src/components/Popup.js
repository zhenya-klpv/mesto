export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector('.popup');
    this._popupSelector = popupSelector;
    this._container = this._popup.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._container.classList.add('popup__container_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._container.classList.remove('popup__container_opened');
    document.removeEventListener('keydown', this._handleEscClose);

  }

  setEventListeners() {
    this._popup.addEventListener('click', evt => this._closePopapOverlay(evt));
    this._iconClosePopup = this._container.querySelector('.popup__close');
    this._iconClosePopup.addEventListener('click', _ => {
      this.close();
    });
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _closePopapOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }
}
