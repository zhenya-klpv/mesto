import { popup, popupImage, popupCaption } from '../utils/constants.js';
import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(item) {
    super.open();
    popup.classList.add('popup__change-background');
    popupImage.src = item.link;
    popupCaption.textContent = item.name;
    popupImage.alt = item.name;
  }

  close() {
    super.close();
    popup.classList.remove('popup__change-background');
  }
}
