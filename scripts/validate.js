function enableValidation ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass })
{
const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach(form => {
    //обработчик для отмены сабмита
    form.addEventListener('submit', evt => evt.preventDefault());


    const inputs = form.querySelectorAll(inputSelector);
    inputs.forEach(input => {
    input.addEventListener('input', evt => console.log(evt));

console.log(input.validity)

  });
})
}


// function enableValidation({ formSelector, ...rest }) {
//   const forms = Array.from(document.querySelectorAll(formSelector));
//   console.log(forms);
//   forms.forEach((form) => {
//     form.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(form, rest);
//   });
// }
//
//
// function setEventListeners(
//   form,
//   { inputSelector, submitButtonSelector, ...rest }
// ) {
//   const inputs = Array.from(form.querySelectorAll(inputSelector));
//   const button = form.querySelector(submitButtonSelector);
//   toggleButton(button, inputs, rest);
//   console.log(inputs);
//   inputs.forEach((input) => {
//     input.addEventListener("input", () => {
//       isValid(form, input, rest);
//       toggleButton(button, inputs, rest);
//     });
//   });
// }
//
// function hasInvalidInput(inputs) {
//   return inputs.some((input) => {
//     return !input.validity.valid;
//   });
// }
//
// function toggleButton(button, inputs, { inactiveButtonClass }) {
//   if (hasInvalidInput(inputs)) {
//     button.classList.add(inactiveButtonClass);
//   } else {
//     button.classList.remove(inactiveButtonClass);
//   }
// }
//
// function isValid(form, input, rest) {
//   if (!input.validity.valid) {
//     showInputError(
//       form,
//       input,
//       input.validationMessage,
//       rest
//     );
//   } else {
//     hideInputError(form, input, rest);
//   }
// }


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
