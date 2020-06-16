let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let name = profile.querySelector('.profile__name');
let job = profile.querySelector('.profile__job');
let nameInput = document.querySelector('.popup__text_type_name');
let jobInput = document.querySelector('.popup__text_type_job');
let formElement = popup.querySelector('.popup__container');

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
