import {
  togglePopup,
} from './utils.js';

import {
  popupImage,
} from './constants.js';


class Card {
  constructor(title, link, cardSelector) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector('.element__template')
      .content
      .querySelector('.element__item')
      .cloneNode(true)
    return cardElement;
  }

  _handleLikeClick() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }

  _handleDeleteClick() {
    const itemCard = this._element.closest('.element__item');
    itemCard.remove();
    this._element = null;
  }

  _handleImageClick() {
    const zoomImage = document.querySelector('.popup__zoom-image');
    const zoomImageName = document.querySelector('.popup__image-name').textContent = this._title;
    zoomImage.src = this._link;
    zoomImage.alt = ('Изображение: ' + this._title);

    togglePopup(popupImage);
  }


  _setEventListeners() {
    this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
      this._handleLikeClick()
    });

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleImageClick();
    });

    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._handleDeleteClick();
    });
  }

  generateCard = () => {
    this._element = this._getTemplate();
    this._setEventListeners()
    this._element.querySelector('.element__title').textContent = this._title;
    this._element.querySelector('.element__image').setAttribute('alt', 'Изображение');
    this._element.querySelector('.element__image').src = this._link;

    return this._element;
  }
}

export {
  Card
}
