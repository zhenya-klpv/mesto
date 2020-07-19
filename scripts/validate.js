const alidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

enableValidation(alidationConfig);


// запуск процесса валидации
function enableValidation({
  formSelector,
  ...rest
}) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
    form.addEventListener('submit', evt => evt.preventDefault());
    setEventListeners(form, rest);
  });
};


// наложение обработчиков на поля форм
function setEventListeners(form, {
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  ...rest
}) {
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  const button = form.querySelector(submitButtonSelector);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(form, input, rest);
      toggleSubmitButton(inputs, input, button, inactiveButtonClass);
    });
  });
}


//проверка валидности введенных данных
function isValid(form, input, rest) {
  const inputIsValid = input.validity.valid;
  if (!input.validity.valid) {
    const errorMessage = input.validationMessage;
    showInputError(
      form,
      input,
      errorMessage,
      rest
    );

  } else {
    hideInputError(form, input, rest);
  }
}


//показать ошибку под полем
function showInputError(form, input, errorMessage, {
  errorClass,
  ...rest
}) {
  const inputName = input.getAttribute('id');
  const inputError = form.querySelector(`#${input.id}-error`);
  input.classList.add('popup__input_type_error');
  inputError.textContent = errorMessage;
  inputError.classList.add('popup__error_visible');
};


// скрыть ошибку под полем
function hideInputError(form, input, inputErrorClass, errorClass) {
  const inputName = input.getAttribute('id');
  const inputError = form.querySelector(`#${input.id}-error`);
  input.classList.remove('popup__input_type_error');
  inputError.classList.remove('popup__error_visible');
  inputError.textContent = '';
};


// функция дл проверки есть ли хотя бы одно не валидное поле
function hasInvalidInput(inputs) {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
}


// Функция переключения кнопки.
function toggleSubmitButton(inputs, input, button, inactiveButtonClass) {
  if (hasInvalidInput(inputs)) {
    button.classList.add('popup__button_disabled');
    button.setAttribute('disabled', true);

  } else {
    button.classList.remove('popup__button_disabled');
    button.removeAttribute('disabled');
  }
};
