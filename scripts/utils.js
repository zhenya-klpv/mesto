// функция открытия попоапа
const togglePopup = (popup) => {
  popup.classList.toggle('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

// функция закрытия на Escape
const closePopupEsc = function(evt) {
  const activePopup = document.querySelector('.popup_opened')
  if (evt.key === 'Escape') {
    togglePopup(activePopup);
  }
  document.removeEventListener('keydown', closePopupEsc);
}

//функция закрытия на overlay
const closePopupOverlay = function(evt) {
  if (evt.target !== evt.currentTarget) {
    evt.target.classList.remove('popup_opened');
  }
};

export {
  togglePopup,
  closePopupEsc,
  closePopupOverlay
}
