const openPopupProfile = document.querySelector('.profile__edit-button');
const closePopupProfile = document.querySelector('.popup__close-button_profile');
const popupProfile = document.querySelector('.popup_profile');
const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const job = profile.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__text_type_profile-name');
const jobInput = document.querySelector('.popup__text_type_profile-job');
const formProfileElement = document.querySelector('.popup__container_profile');



function popupProfileToggle() {
  popupProfile.classList.toggle('popup_opened');
  if (popupProfile.classList.contains('popup_opened')) {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popupProfileToggle()
}

openPopupProfile.addEventListener('click', popupProfileToggle);
closePopupProfile.addEventListener('click', popupProfileToggle);
formProfileElement.addEventListener('submit', formSubmitHandler);




const openPopupPlace = document.querySelector('.profile__add-button');
const closePopupPlace = document.querySelector('.popup__close-button_place');
const popupPlace = document.querySelector('.popup_place');
const placeInput = document.querySelector('.popup__text_type_place-name');
const linkInput = document.querySelector('.popup__text_type_place-link');
const formPlaceElement = popupPlace.querySelector('.popup__container_place');
const place = document.querySelector('.popup__text_type_place-name');
const link = document.querySelector('.popup__text_type_place-link');


function popupPlaceToggle() {
  popupPlace.classList.toggle('popup_opened');
  if (popupPlace.classList.contains('popup_opened')) {
    placeInput.value = place.textContent;
    linkInput.value = link.textContent;
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  const newPlace = [{
    name: placeInput.value,
    link: linkInput.value,
  }]
  console.log(newPlace);
  newPlace.forEach(function(item) {
    addElements(item);
  });
  popupPlaceToggle()
}

openPopupPlace.addEventListener('click', popupPlaceToggle);
closePopupPlace.addEventListener('click', popupPlaceToggle);
formPlaceElement.addEventListener('submit', formSubmitHandler);


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

const allElements = document.querySelector('.elements');
const templateElements = document.querySelector('.elements__template');

function addElements(item) {
  const element = templateElements.content.cloneNode(true)
  element.querySelector('.elements__title').textContent = item.name;
  element.querySelector('.elements__image').setAttribute('src', item.link);
  element.querySelector('.elements__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__like-button_active');
  });
  element.querySelector('.elements__delete-button').addEventListener('click', function(evt) {
    const itemCard = evt.target.closest('.elements__item');
    itemCard.remove();
});
  allElements.prepend(element);
};


function removeCard(e) {
  const elementItem = e.target.closest('.elements__item');
  elementItem.remove();
  removeCard();
};



initialCards.reverse().forEach(function(item) {
  addElements(item);
});
