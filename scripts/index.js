import {
  // popups
  popupProfile,
  popupImage,
  popupPlace,
  // buttons
  openPopupProfile,
  openPopupPlace,
  closePopupProfile,
  closePopupImage,
  closePopupPlace,
  // var for popup profile
  profile,
  formProfileElement,
  name,
  nameInput,
  job,
  jobInput,
  //  var for popup place
  formPlaceElement,
  placeInput,
  linkInput,
  addElement,
  //  other var
  templateElements,
  initialCards,
  validationConfig,
  formProfile,
  formPlace,
} from './constants.js';

import {
  togglePopup,
  closePopupEsc
} from './utils.js';

import {
  Card
} from './Card.js';

import {
  FormValidator
} from './FormValidator.js';


//функция закрытия на overlay
const closePopupOverlay = function(evt) {
  if (evt.target !== evt.currentTarget) {
    evt.target.classList.remove('popup_opened');
  }
};

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
}

//функция для деактивации кнопки сабмита при первом открытии
function disableSubmitButton() {
  const button = document.querySelector('.popup__save-button_place');
  const input = document.querySelector('.popup__text_type_place-name');
  if (input.value === "") {
    button.classList.add('popup__button_disabled');
    button.setAttribute('disabled', true);
  };
}

//функция для открытия попапа места
function handleOpenPopupPlace() {
  togglePopup(popupPlace);
  placeInput.value = '';
  linkInput.value = '';
  disableSubmitButton();
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
initialCards.reverse().forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();
  addElement.append(cardElement);
});

// функция для отрисовки карточек новой карточки
const renderCard = (item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();
  addElement.prepend(cardElement);
}

const formEditProfileValidation = new FormValidator(validationConfig, formProfile);
formEditProfileValidation.enableValidation();
formEditProfileValidation.resetForm();

const formPlaceValidation = new FormValidator(validationConfig, formPlace);
formPlaceValidation.enableValidation();
formPlaceValidation.resetForm();

// Слушатели событий
openPopupProfile.addEventListener('click', handleOpenPopupProfile, ); // слушатель для открытие модального окна
closePopupProfile.addEventListener('click', () => togglePopup(popupProfile)); // слушатесль для закрытие модального окна
formProfileElement.addEventListener('submit', formSubmitHandler); // слушатель для записи формы
closePopupImage.addEventListener('click', () => togglePopup(popupImage)); // слушатель для закрытия модального окна
openPopupPlace.addEventListener('click', handleOpenPopupPlace, disableSubmitButton()); // слушатель для открытие модального окна
closePopupPlace.addEventListener('click', () => togglePopup(popupPlace)); // слушатель для закрытие модального окна
formPlaceElement.addEventListener('submit', formSubmitPlaceHandler); // слушатель для записи формы
document.addEventListener('click', closePopupOverlay); // слушатель для закрытия на оверлей
