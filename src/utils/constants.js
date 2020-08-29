// export const initialCards = [{
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

export const validationConfig = ({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

export const profileConfig = ({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job',
});

export const containerSelector = '.photo-place__elements';
export const containerProfile = '.popup__container_profile';
export const containerUserCards = '.popup__container_cards';
export const containerViewImages = '.popup__container-view';
export const containerAvatar = '.popup__container_avatar';
export const containerTrash = '.popup__container_trash';
export const textDisabledClass = 'popup__button-text_disabled';

export const profileEditButton = document.querySelector('.profile__edit-button');
export const formEditProfile = document.querySelector('.popup__form_profile');
export const inputNameProfile = formEditProfile.querySelector('.popup__input_name');
export const inputJobProfile = formEditProfile.querySelector('.popup__input_job');
export const cardsAddButton = document.querySelector('.profile__add-button');
export const formAddCards = document.querySelector('.popup__form_cards');

export const avatar = document.querySelector('.profile__avatar');
export const userName = document.querySelector('.profile__name');
export const userJob = document.querySelector('.profile__job');
export const formNewAvatar = document.querySelector('.popup__form_avatar');
