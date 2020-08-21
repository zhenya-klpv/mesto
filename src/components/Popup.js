import {
  popup
} from '../utils/constants.js';
export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._container = popup.querySelector(this._popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // Открытие попапа
  open() {
    popup.classList.add('popup_opened');
    this._container.classList.add('popup__container_opened');
    document.addEventListener('keydown', this._handleEscClose); // Устанавливаем слушатель на кнопку "Esc".
  }

  // Закрытие попапа
  close() {
    popup.classList.remove('popup_opened');
    this._container.classList.remove('popup__container_opened');
    document.removeEventListener('keydown', this._handleEscClose);

  }

  setEventListeners() {
    popup.addEventListener('click', evt => this._closePopapOverlay(evt));
    this._iconClosePopup = this._container.querySelector('.popup__close');
    this._iconClosePopup.addEventListener('click', _ => {
      this.close();
    });
  }

  // Закрытие на Esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  // Закрытие на Оверлей
  _closePopapOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }
}
