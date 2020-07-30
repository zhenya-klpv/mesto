// popups
const popupProfile = document.querySelector('.popup_profile');
const popupImage = document.querySelector('.popup_image');
const popupPlace = document.querySelector('.popup_place');


// popups buttons
const openPopupProfile = document.querySelector('.profile__edit-button');
const openPopupPlace = document.querySelector('.profile__add-button');

const closePopupProfile = document.querySelector('.popup__close-button_profile');
const closePopupImage = document.querySelector('.popup__close-button_image');
const closePopupPlace = document.querySelector('.popup__close-button_place');


// var for popup profile
const profile = document.querySelector('.profile');
const formProfileElement = document.querySelector('.popup__container_profile');
const name = profile.querySelector('.profile__name');
const nameInput = document.querySelector('.popup__text_type_profile-name');
const job = profile.querySelector('.profile__job');
const jobInput = document.querySelector('.popup__text_type_profile-job');


//  var for popup place
const formPlaceElement = popupPlace.querySelector('.popup__container_place');
const placeInput = document.querySelector('.popup__text_type_place-name');
const linkInput = document.querySelector('.popup__text_type_place-link');


//  other var
const addElement = document.querySelector('.element');
const templateElements = document.querySelector('.element__template');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const formProfile = document.querySelector('.popup__container_profile');
const formPlace = document.querySelector('.popup__container_place');


// const cardSelector =

const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export {
  popupProfile,
  popupImage,
  popupPlace,
  openPopupProfile,
  openPopupPlace,
  closePopupProfile,
  closePopupImage,
  closePopupPlace,
  profile,
  formProfileElement,
  name,
  nameInput,
  job,
  jobInput,
  formPlaceElement,
  placeInput,
  linkInput,
  addElement,
  templateElements,
  initialCards,
  validationConfig,
  formProfile,
  formPlace
}
