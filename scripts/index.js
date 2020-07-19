// Александр, большое спасибо за ревью! Очень приятно, что вы похвалили мой код и мою работу. Это впервые за все ревью, котрые были накурсе! Было очень приятно. Потому, что я реально как войну прошел, написав этот код) Сложно. Впервые, все же) Вроде все комментарии устранил. Сейчас должно быть все хорошо. Честно говоря, ошибку при воторном открытии после сохраниения я не нашел, спросил об этом куратора, он сказал, все ок, можно отправлять. Спасибо, что отметили кавычки и мелкие неточности, да и вообще все отметили. Спасибо. Для меня это очень важно и ценно.  Попап профиля поправлю на следующем спринте. Сейчас уже не готов с этим разбираться, честно говоря, немного устал)) Удачи и хороших выходных.

import {
  initialCards
} from './utils.js';


// popups
const popupProfile = document.querySelector('.popup_profile');
const popupImage = document.querySelector('.popup_image');
const popupPlace = document.querySelector('.popup_place');


// popups open buttons
const openPopupProfile = document.querySelector('.profile__edit-button');
const openPopupPlace = document.querySelector('.profile__add-button');


// popups close buttons
const closePopupProfile = document.querySelector('.popup__close-button_profile');
const closePopupImage = document.querySelector('.popup__close-button_image');
const closePopupPlace = document.querySelector('.popup__close-button_place');


// other var for popup profile
const profile = document.querySelector('.profile');
const formProfileElement = document.querySelector('.popup__container_profile');
const name = profile.querySelector('.profile__name');
const nameInput = document.querySelector('.popup__text_type_profile-name');
const job = profile.querySelector('.profile__job');
const jobInput = document.querySelector('.popup__text_type_profile-job');


//  other var for popup place
const formPlaceElement = popupPlace.querySelector('.popup__container_place');
const placeInput = document.querySelector('.popup__text_type_place-name');
const linkInput = document.querySelector('.popup__text_type_place-link');



//  other var
const addElement = document.querySelector('.element');
const templateElements = document.querySelector('.element__template');

// функция открытия попоапа
const togglePopup = function(popup) {
  popup.classList.toggle('popup_opened');
  document.addEventListener('keydown', closePopupEsc); // слушатель закрытия на Escape
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

// функция закрытия на Escape
const closePopupEsc = function(evt) {
  const activePopup = document.querySelector('.popup_opened')
  if (evt.key === 'Escape') {
    togglePopup(activePopup);
  }
  document.removeEventListener('keydown', closePopupEsc);
}


//функция закрытия на overlay
const closePopupOverlay = function(evt) {
  if (evt.target !== evt.currentTarget) {
    evt.target.classList.remove('popup_opened');
  }
};
document.addEventListener('click', closePopupOverlay);


//попап для редактирования профиля
const formSubmitHandler = function(evt) { // вводим данные и закрытие формы
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  togglePopup(popupProfile);

}


function handleOpenPopupProfile() { // функция открытия модального окна
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  togglePopup(popupProfile); // открытие модального окна
}


openPopupProfile.addEventListener('click', handleOpenPopupProfile, ); // слушатель для открытие модального окна
closePopupProfile.addEventListener('click', () => togglePopup(popupProfile)); // слушатесль для закрытие модального окна
formProfileElement.addEventListener('submit', formSubmitHandler); // слушатель для записи формы



function handleOpenPopupPlace() { //функция для открытия модального окна
  togglePopup(popupPlace);
  placeInput.value = '';
  linkInput.value = '';
  disableSubmitButton();
}

closePopupImage.addEventListener('click', () => togglePopup(popupImage)); // слушатель для закрытия модального окна

// функция для отрисовки карточек
const renderCard = (item, addElement) => {
  const newCard = addCard(item); // тут создается разметка карточки
  addElement.prepend(newCard); // тут она отрисовывается
}

//создание нового места
function formSubmitPlaceHandler(evt) { // функция сохранения новой карточки
  evt.preventDefault();
  const newPlace = {
    name: placeInput.value,
    link: linkInput.value,
  };
  togglePopup(popupPlace);
  renderCard(newPlace, addElement)
}


openPopupPlace.addEventListener('click', handleOpenPopupPlace, disableSubmitButton()); // слушатель для открытие модального окна
closePopupPlace.addEventListener('click', () => togglePopup(popupPlace)); // слушатель для закрытие модального окна
formPlaceElement.addEventListener('submit', formSubmitPlaceHandler); // слушатель для записи формы

// открытие попапа с изображнием
function setImageAndLink(setItem) {
  const imageLink = document.querySelector('.popup__zoom-image');
  const imageName = document.querySelector('.popup__image-name');
  imageLink.setAttribute('src', setItem.link);
  imageName.textContent = setItem.name;
}


// создание  карточек
const addCard = item => { // функция добавления новой карточки
  const element = templateElements.content.cloneNode(true)
  const elementItemName = element.querySelector('.element__title');
  const elementItemLinkandAlt = element.querySelector('.element__image');
  const elementLikeButton = element.querySelector('.element__like-button');
  const elementDeleteButton = element.querySelector('.element__delete-button');
  elementItemName.textContent = item.name;
  elementItemLinkandAlt.setAttribute('src', item.link);
  elementItemLinkandAlt.setAttribute('alt', 'Изображение');

  elementLikeButton.addEventListener('click',
    (evt) => { // лайк карточки
      evt.target.classList.toggle('element__like-button_active');
    });

  elementDeleteButton.addEventListener('click', (evt) => { // удаление карточки
    const itemCard = evt.target.closest('.element__item');
    itemCard.remove();
  });

  element.querySelector('.element__image').addEventListener('click', () => {
    setImageAndLink(item);
    togglePopup(popupImage);
  });
  return element;
}


initialCards.reverse().forEach((item) => {
  renderCard(item, addElement);
});
