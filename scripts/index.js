// popups
const popupProfile = document.querySelector('.popup_profile');
const popupImage = document.querySelector('.popup_image');
const popupPlace = document.querySelector('.popup_place');

// popups open buttons
const openPopupProfile = document.querySelector('.profile__edit-button');
const openPopupImage = document.querySelector('.elements__image');
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

// функция открытия попоапа для редактирования профиля
const togglePopup = function(popup) {
  popup.classList.toggle('popup_opened');
};

openPopupProfile.addEventListener('click', function(){
  togglePopup(popupProfile);
  submitForm();
});

const formSubmitHandler = function(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  togglePopup(popupProfile);
};

function submitForm(){
  if (popupProfile.classList.contains('popup_opened')) {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
  };
};

closePopupProfile.addEventListener('click', function() {
  togglePopup(popupProfile);
});
formProfileElement.addEventListener('submit', formSubmitHandler);



function popupImageToggle() {
  popupImage.classList.toggle('popup_opened');
}
closePopupImage.addEventListener('click', popupImageToggle);



function popupPlaceToggle() {
  popupPlace.classList.toggle('popup_opened');
  if (popupPlace.classList.contains('popup_opened')) {
    placeInput.value = place.textContent;
    linkInput.value = link.textContent;
  }
}

function formSubmitPlaceHandler(evt) {
  evt.preventDefault();
  const newPlace = [{
    name: placeInput.value,
    link: linkInput.value,
  }]
  newPlace.forEach(function(item) {
    addElements(item);
  });
  popupPlaceToggle()
}

openPopupPlace.addEventListener('click', popupPlaceToggle);
closePopupPlace.addEventListener('click', popupPlaceToggle);
formPlaceElement.addEventListener('submit', formSubmitPlaceHandler);


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
  element.querySelector('.elements__like-button').addEventListener('click',

    function(evt) {
      evt.target.classList.toggle('elements__like-button_active');
    });

  element.querySelector('.elements__delete-button').addEventListener('click', function(evt) {
    const itemCard = evt.target.closest('.elements__item');
    itemCard.remove();
  });

  element.querySelector('.elements__image').addEventListener('click', () => {
    const imageLink = document.querySelector('.popup__zoom-image')
    imageLink.setAttribute('src', item.link)
    const imageName = document.querySelector('.popup__image-name')
    imageName.textContent = item.name
    popupImageToggle()

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
