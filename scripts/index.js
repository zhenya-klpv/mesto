const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const job = profile.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const formElement = popup.querySelector('.popup__container');


function popupToggle() {
  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened')) {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popupToggle()
}

openPopup.addEventListener('click', popupToggle);
closePopup.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);


const initialCards = [{
    name: 'Архыз',
    alt: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    alt: 'Изображение',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    alt: 'Изображение',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    alt: 'Изображение',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    alt: 'Изображение',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    alt: 'Изображение',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const allElements = document.querySelector('.elements');
const templateElements = document.querySelector('.elements__template');

function addElements(item) {
  const element = templateElements.content.cloneNode(true)
  element.querySelector('.elements__title').textContent = item.name;
  element.querySelector('.elements__title').setAttribute("alt", item.alt);
  element.querySelector(".elements__image").setAttribute("src", item.link);

  allElements.append(element);
}

initialCards.forEach(function (item) {
  addElements(item);
});
