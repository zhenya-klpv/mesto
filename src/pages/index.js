import '../pages/index.css';
import {
  initialCards, validationConfig, profileConfig, containerSelector, containerProfile,
  containerUserCards, containerViewImages, profileEditButton, formEditProfile, inputNameProfile,
  inputJobProfile, cardsAddButton, formAddCards
} from '../utils/constants.js';

import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

// Экземпляр класса с информацией о пользователе
const userProfile = new UserInfo(profileConfig);
// Экземпляр класса попапа с изображением
const popupWithImage = new PopupWithImage(containerViewImages);
popupWithImage.setEventListeners();

// Открытие попапа с изображением
function handleImageClick(item) {
  popupWithImage.open(item);
}

// Создание и добавление карточек на страницу
const addCards = (items) => {
  const initialCardsList = new Section({
    data: items, renderer: (item) => {
      const card = new Card(item, '#photo-place__template', handleImageClick);
      const cardElement = card.generateCard();
      initialCardsList.addItem(cardElement);
    }
  }, containerSelector);
  initialCardsList.renderItems();
}
addCards(initialCards);

// Экземпляр класса для попапа редактирования профиля
const popupEditProfile = new PopupWithForm({
  popupSelector: containerProfile, handleFormSubmit: (formData) => {
    userProfile.setUserInfo(formData);
    popupEditProfile.close();
  }
});
popupEditProfile.setEventListeners();

// Экземпляр класса для попапа добавления нового места
const popupAddCards = new PopupWithForm({
  popupSelector: containerUserCards, handleFormSubmit: (formData) => {
    const newCard = [{ name: formData.card, link: formData.link }];
    addCards(newCard);
    popupAddCards.close();
  }
});
popupAddCards.setEventListeners();

//Запуск процесса валидации формы редактирования профиля
const formEditProfileValidation = new FormValidator(validationConfig, formEditProfile);
formEditProfileValidation.enableValidation();

//Запуск валидации формы добавления нового места
const formAddNewCardsValidation = new FormValidator(validationConfig, formAddCards);
formAddNewCardsValidation.enableValidation();


profileEditButton.addEventListener('click', _ => {
  popupEditProfile.open();
  profileEditButton.blur();
  const { name, job } = userProfile.getUserInfo();
  inputNameProfile.value = name;
  inputJobProfile.value = job;
  formEditProfileValidation.resetForm();
});

cardsAddButton.addEventListener('click', _ => {
  popupAddCards.open();
  cardsAddButton.blur();
  formAddNewCardsValidation.resetForm();
});
