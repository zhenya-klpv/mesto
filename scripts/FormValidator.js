class FormValidator {
  constructor(data, form) {
    this._form = form;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }

  // запуск процесса валидации
  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  // функция очистки форм от ошибок
  resetForm() {
    this._findAllInputs();
    this._allInput.forEach((input) => {
      this._input = input;
      this._hideInputError();
      this._toggleSubmitButton();
    });
  }

  // Функция поиска всех полей формы и кнопки сабмита
  _findAllInputs = () => {
    this._allInput = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._button = this._form.querySelector(this._submitButtonSelector);
  }

  // наложение обработчиков на поля форм
  _setEventListeners = () => {
    this._findAllInputs();
    this._allInput.forEach((input) => {
      input.addEventListener('input', () => {
        this._input = input;
        this._isValid();
        this._toggleSubmitButton();
      });
    });
  }


  //проверка валидности введенных данных
  _isValid = () => {
    if (!this._input.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  }

  //показать ошибку под полем
  _showInputError = () => {
    const inputError = this._form.querySelector(`#${this._input.id}-error`);
    this._input.classList.add(this._inputErrorClass);
    inputError.textContent = this._input.validationMessage;
    inputError.classList.add(this._errorClass);
  };

  // скрыть ошибку под полем
  _hideInputError = () => {
    const inputError = this._form.querySelector(`#${this._input.id}-error`);
    this._input.classList.remove(this._inputErrorClass);
    inputError.classList.remove(this._errorClass);
    inputError.textContent = '';
  };

  // Функция переключения кнопки.
  _toggleSubmitButton = () => {
    if (this._hasInvalidInput(this._allInput)) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.setAttribute('disabled', true);
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.removeAttribute('disabled');
    }
  };

  // функция дл проверки есть ли хотя бы одно не валидное поле
  _hasInvalidInput = () => {
    return this._allInput.some((input) => {
      return !input.validity.valid;
    });
  }
}

export {
  FormValidator
}
