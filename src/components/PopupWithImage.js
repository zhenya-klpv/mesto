import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  open(item) {
    super.open(item);
    this._popup.classList.add('popup__change-background');
    this._popupImage.src = item.link;
    this._popupCaption.textContent = item.name;
    this._popupImage.alt = item.name;
  }

  close() {
    super.close();
    this._popup.classList.remove('popup__change-background');
  }
}
