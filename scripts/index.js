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
const place = document.querySelector('.popup__text_type_place-name');
const placeInput = document.querySelector('.popup__text_type_place-name');
const link = document.querySelector('.popup__text_type_place-link');
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
};

function handleOpenPopupProfile() { // функция открытия модального окна
  togglePopup(popupProfile); // открытие модального окна
  placeHoldersProfile(); // сохранение и отображение данных имени и профессии при каждом новом открытии модального окна
}

function handleClosePopupProfile() { // закрытие в попапа
  togglePopup(popupProfile);
}

function placeHoldersProfile() { // имя и профессия для отображения по умолчании при открытии попапа
  if (popupProfile.classList.contains('popup_opened')) {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
  };
}

openPopupProfile.addEventListener('click', handleOpenPopupProfile); // слушатель для открытие модального окна
openPopupProfile.addEventListener('click', handleOpenPopupProfile); // слушатель для открытие модального окна
closePopupProfile.addEventListener('click', handleClosePopupProfile); // слушатесль для закрытие модального окна
formProfileElement.addEventListener('submit', formSubmitHandler); // слушатель для записи формы



//попап с изображением
function handleOpenPopupImage() { //функция для открытия модального окна
  togglePopup(popupPlace);
  placeHolderPlace();
}

function handleClosePopupImage() { // функция для закрытие модального окна
  togglePopup(popupImage);
}

openPopupPlace.addEventListener('click', handleOpenPopupImage); // слушатель для открытие модального окна
closePopupImage.addEventListener('click', handleClosePopupImage); // слушатель для закрытие модального окна


//попапдля создания нового места
function handleClosePopupPlace() { // функция закрытия попапа
  togglePopup(popupPlace);
}

function placeHolderPlace() { // имя и профессия для отображения по умолчании при открытии попапа
  if (popupPlace.classList.contains('popup_opened')) {
    placeInput.value = '';
    linkInput.value = '';
  };
}

function formSubmitPlaceHandler(evt) { // функция сохранения новой карточки
  evt.preventDefault();
  const newPlace = [{
    name: placeInput.value,
    link: linkInput.value,
  }];
  newPlace.forEach(function(item) { //// Айгуль, скажите, пожалуйста, что не так с этой строкой кода? Если newPlace  добавлять как объект, то ломается логикадобавления нового места. И почему он ДОЛЖЕН быть объектом?
    addCard(item);
  });
  togglePopup(popupPlace);
}

closePopupPlace.addEventListener('click', handleClosePopupPlace); // слушатель для закрытие модального окна
formPlaceElement.addEventListener('submit', formSubmitPlaceHandler); // слушатель для записи формы



// добавление  карточек
function addCard(item) { // функция добавления новой карточки
  const element = templateElements.content.cloneNode(true)
  element.querySelector('.element__title').textContent = item.name;
  element.querySelector('.element__image').setAttribute('src', item.link);
  element.querySelector('.element__image').setAttribute('alt', 'Изображение')
  element.querySelector('.element__like-button').addEventListener('click',
    function(evt) { // лайк карточки
      evt.target.classList.toggle('element__like-button_active');
    })

  element.querySelector('.element__delete-button').addEventListener('click', function(evt) { // удаление карточки
    const itemCard = evt.target.closest('.element__item');
    itemCard.remove();
  });

  // открытие попапа с изображнием
  function getImageAndLink() {
    const imageLink = document.querySelector('.popup__zoom-image');
    const imageName = document.querySelector('.popup__image-name');
    imageLink.setAttribute('src', item.link);
    imageName.textContent = item.name;
  }


  element.querySelector('.element__image').addEventListener('click', () => {
    getImageAndLink();
    togglePopup(popupImage);
  });

  addElement.prepend(element); // Айгуль, скажите, пожалуйста, что не так с этой строкой кода? Она же добавляет элемент как нужно.
};

initialCards.reverse().forEach(function(item) {
  addCard(item);
});
