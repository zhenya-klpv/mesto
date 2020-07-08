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



// функция открытия попоапа
const togglePopup = function(popup) {
  popup.classList.toggle('popup_opened');
}



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


openPopupProfile.addEventListener('click', handleOpenPopupProfile); // слушатель для открытие модального окна
closePopupProfile.addEventListener('click', () => togglePopup(popupProfile)); // слушатесль для закрытие модального окна
formProfileElement.addEventListener('submit', formSubmitHandler); // слушатель для записи формы


//попап с изображением
function handleOpenPopupPlace() { //функция для открытия модального окна
  togglePopup(popupPlace);
  placeInput.value = '';
  linkInput.value = '';
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
  // addCard(newPlace);
  togglePopup(popupPlace);
  renderCard(newPlace, addElement)
}


openPopupPlace.addEventListener('click', handleOpenPopupPlace); // слушатель для открытие модального окна
closePopupPlace.addEventListener('click', () => togglePopup(popupPlace)); // слушатель для закрытие модального окна
formPlaceElement.addEventListener('submit', formSubmitPlaceHandler); // слушатель для записи формы

// открытие попапа с изображнием
function setImageAndLink(setItem) {
  const element = setItem;
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
