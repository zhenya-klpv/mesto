class FormValidator {
constructor(

)

enableValidation(){

}


}

const config = { ... }
const myForm = ...

class FormValidator{
  constructor(enableValidation, form){...}
}
const newValidation = new FormValidator(config, myForm)
