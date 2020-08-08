import {
  initialCards,
  validationConfig,
} from '../utils/constants.js';

import {
  togglePopup,
  closePopupEsc,
  closePopupOverlay
} from '../components/utils.js';

import {
  Card,
  popupImage
} from '../components/Card.js';

import {
  FormValidator
} from '../components/FormValidator.js';

// popups
const popupProfile = document.querySelector('.popup_profile');

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

const formProfile = document.querySelector('.popup__container_profile');
const formPlace = document.querySelector('.popup__container_place');


//попап для редактирования профиля
const formSubmitHandler = function(evt) { // вводим данные и закрытие формы
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  togglePopup(popupProfile);
}

// функция открытия попапа профиля
function handleOpenPopupProfile() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  togglePopup(popupProfile);
  formEditProfileValidation.resetForm();
}

//функция для открытия попапа места
function handleOpenPopupPlace() {
  togglePopup(popupPlace);
  placeInput.value = '';
  linkInput.value = '';
  formPlaceValidation.resetForm();
}

// функция создание нового места
function formSubmitPlaceHandler(evt) { // функция сохранения новой карточки
  evt.preventDefault();
  const newPlace = {
    name: placeInput.value,
    link: linkInput.value,
  };
  togglePopup(popupPlace);
  renderCard(newPlace, addElement)
}

// функция добавления в карточек разметку
initialCards.forEach((item) => {
  addElement.prepend(new Card(item.name, item.link).generateCard())
});

// функция для отрисовки новой карточки
const renderCard = (item) => {
  addElement.prepend(new Card(item.name, item.link).generateCard())
}

const formEditProfileValidation = new FormValidator(validationConfig, formProfile);
formEditProfileValidation.enableValidation();

const formPlaceValidation = new FormValidator(validationConfig, formPlace);
formPlaceValidation.enableValidation();


// Слушатели событий
openPopupProfile.addEventListener('click', handleOpenPopupProfile, ); // слушатель для открытие модального окна
closePopupProfile.addEventListener('click', () => togglePopup(popupProfile)); // слушатесль для закрытие модального окна
formProfileElement.addEventListener('submit', formSubmitHandler); // слушатель для записи формы
closePopupImage.addEventListener('click', () => togglePopup(popupImage)); // слушатель для закрытия модального окна
openPopupPlace.addEventListener('click', handleOpenPopupPlace); // слушатель для открытие модального окна
closePopupPlace.addEventListener('click', () => togglePopup(popupPlace)); // слушатель для закрытие модального окна
formPlaceElement.addEventListener('submit', formSubmitPlaceHandler); // слушатель для записи формы
document.addEventListener('click', closePopupOverlay); // слушатель для закрытия на оверлей
