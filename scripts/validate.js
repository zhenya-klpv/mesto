obj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

enableValidation(obj);


// запуск процесса валидации
function enableValidation({
  formSelector,
  ...rest
}) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  // console.log(forms);
  forms.forEach((form) => {
    // console.log(form);
    form.addEventListener("submit", evt => evt.preventDefault());
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
  // console.log({form, inputSelector})
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  // console.log(inputs)
  const button = form.querySelector(submitButtonSelector);
  // console.log(button)
  inputs.forEach((input) => {
    // console.log(input);
    input.addEventListener("input", () => {
      isValid(form, input, rest);
      toggleSubmitButton(inputs, input, button, inactiveButtonClass);
    });
  });
}


//проверкавалидности введенных данных
function isValid(form, input, rest) {
  const inputIsValid = input.validity.valid;
  if (!input.validity.valid) {
    const errorMessage = input.validationMessage;
    // console.log(errorMessage);
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
  // console.log(inputName);
  const inputError = form.querySelector(`#${input.id}-error`);
  // console.log(inputError);
  input.classList.add('popup__input_type_error');
  // console.log(errorMessage);
  inputError.textContent = errorMessage;
  inputError.classList.add('popup__error_visible');
};


// скрыть ошибку под полем
function hideInputError(form, input, inputErrorClass, errorClass) {
  const inputName = input.getAttribute('id');
  // console.log(inputName);
  const inputError = form.querySelector(`#${input.id}-error`);
  // console.log(inputError);
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
  // console.log(input);
  if (hasInvalidInput(inputs)) {
    button.classList.add('popup__button_disabled');
    button.setAttribute('disabled', true);

  } else {
    button.classList.remove('popup__button_disabled');
    button.removeAttribute('disabled');
  }
};
