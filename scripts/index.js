const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const job = profile.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const formElement = popup.querySelector('.popup__container');

let popupToggle = function(event) {
  popup.classList.toggle('popup_opened')
  nameInput.value = name.textContent
  jobInput.value = job.textContent
}

nameInput.value = 'Жак-Ив Кусто';
jobInput.value = 'Исследователь океана';

function formSubmitHandler(evt) {
  evt.preventDefault()
  popup.classList.toggle('popup_opened')
  name.textContent = nameInput.value
  job.textContent = jobInput.value
}

openPopup.addEventListener('click', popupToggle);
closePopup.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);
