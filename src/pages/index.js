import "../pages/index.css";
import {
  validationConfig,
  profileConfig,
  containerSelector,
  containerProfile,
  containerUserCards,
  containerViewImages,
  profileEditButton,
  formEditProfile,
  inputNameProfile,
  inputJobProfile,
  cardsAddButton,
  formAddCards,
  containerAvatar,
  avatar,
  formNewAvatar,
  containerTrash,
  userName,
  userJob,
  textDisabledClass,
} from "../utils/constants.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import Api from "../components/Api.js";


const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-14",
  headers: {
    authorization: "92ec6c65-0296-4365-98b0-292504a66f29",
    "Content-Type": "application/json",
  },
});

const userProfile = new UserInfo(profileConfig);
const popupWithImage = new PopupWithImage(containerViewImages);
popupWithImage.setEventListeners();

function handleCardClick(item) {
  popupWithImage.open(item);
}

function handleTrashClick(itemId, handleDeleteCard, element) {
  const popupWithSubmit = new PopupWithSubmit({
    popupSelector: containerTrash,
    handleFormSubmit: (_) => {
      api
        .deleteCard(itemId)
        .then((result) => {
          console.log(result);
          handleDeleteCard(element);
        })
        .catch((err) => {
          console.log(err);
        });
      popupWithSubmit.close();
    },
  });
  popupWithSubmit.open();
  popupWithSubmit.setEventListeners();
}

function handleAddLike(itemId, numberLikes) {
  api
    .addLikeCard(itemId)
    .then((result) => {
      numberLikes.textContent = result.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleRemoveLike(itemId, numberLikes) {
  api
    .removeLikeCard(itemId)
    .then((result) => {
      numberLikes.textContent = result.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
}

const addCards = (items, userInfo) => {
  const initialCardsList = new Section({
      data: items,
      renderer: (item) => {
        const card = new Card(
          item,
          userInfo,
          "#photo-place__template",
          handleCardClick,
          handleTrashClick,
          handleAddLike,
          handleRemoveLike
        );
        const cardElement = card.generateCard();
        initialCardsList.addItem(cardElement);
      },
    },
    containerSelector
  );
  initialCardsList.renderItems();
};

api
  .getInitialInfo()
  .then(([userInfo, initialCards]) => {
    avatar.style.backgroundImage = `url(${userInfo.avatar})`;
    userName.textContent = userInfo.name;
    userJob.textContent = userInfo.about;
    addCards(initialCards, userInfo);
  })
  .catch((err) => {
    console.log(err);
  });

function savingData(form, load) {
  if (load) {
    form.querySelector(".popup__button-save").classList.add(textDisabledClass);
    form
      .querySelector(".popup__button-saving")
      .classList.remove(textDisabledClass);
  } else {
    form
      .querySelector(".popup__button-save")
      .classList.remove(textDisabledClass);
    form
      .querySelector(".popup__button-saving")
      .classList.add(textDisabledClass);
  }
}

const popupEditProfile = new PopupWithForm({
      popupSelector: containerProfile,
      handleFormSubmit: (formData) => {
        savingData(formEditProfile, true);
        api
          .setUserInfo(formData)
          .then((result) => {
            userProfile.setUserInfo(result);
          })
          .catch((err) => {
            console.log(err);
          });
           popupEditProfile.close();
          },
      }); popupEditProfile.setEventListeners();

    const popupAddCards = new PopupWithForm({

      popupSelector: containerUserCards,
      handleFormSubmit: (formData) => {
        const newCard = [{
          name: formData.card,
          link: formData.link
        }];
        savingData(formAddCards, true);
        api
          .addNewCard(newCard)
          .then((result) => {
            addCards([result], result.owner);
          })
          .catch((err) => {
            console.log(err);
          });
        popupAddCards.close();
      },
    }); popupAddCards.setEventListeners();

    const popupNewAvatar = new PopupWithForm({
      popupSelector: containerAvatar,
      handleFormSubmit: (formData) => {
        savingData(formNewAvatar, true);
        api
          .setUserAvatar(formData)
          .then((result) => {
            avatar.style.backgroundImage = `url(${result.avatar})`;
          })
          .catch((err) => {
            console.log(err);
          });
        popupNewAvatar.close();
      },
    }); popupNewAvatar.setEventListeners();

    const formEditProfileValidation = new FormValidator(
      validationConfig,
      formEditProfile
    ); formEditProfileValidation.enableValidation();

    const formAddNewCardsValidation = new FormValidator(
      validationConfig,
      formAddCards
    ); formAddNewCardsValidation.enableValidation();

    const formNewAvatarValidation = new FormValidator(
      validationConfig,
      formNewAvatar
    ); formNewAvatarValidation.enableValidation();

    profileEditButton.addEventListener("click", (_) => {
      popupEditProfile.open();
      savingData(formEditProfile, false);
      profileEditButton.blur();
      const {
        name,
        job
      } = userProfile.getUserInfo();
      inputNameProfile.value = name;
      inputJobProfile.value = job;
      formEditProfileValidation.resetForm();
    });

    cardsAddButton.addEventListener("click", (_) => {
      popupAddCards.open();
      savingData(formAddCards, false);
      cardsAddButton.blur();
      formAddNewCardsValidation.resetForm();
    });

    avatar.addEventListener("click", (_) => {
      popupNewAvatar.open();
      savingData(formNewAvatar, false);
      avatar.blur();
      formNewAvatarValidation.resetForm();
    });
