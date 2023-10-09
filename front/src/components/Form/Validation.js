export default function Validation(inputs) {
    const errors = {};
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPass = /[0-9]/;
  
    if (!inputs.username) {
      errors.username = "¡Complete el campo obligatorio!";
    } else if (!regexEmail.test(inputs.username)) {
      errors.username = "El nombre debe ser un correo electrónico válido.";
    } else if (inputs.username.length > 35) {
      errors.username = "El campo de usuario debe tener un máximo de 35 caracteres.";
    } else {
      errors.username = "";
    }
  
    if (!inputs.password) {
      errors.password = "¡Complete el campo obligatorio!";
    } else if (!regexPass.test(inputs.password)) {
      errors.password = "Debe contener al menos un número.";
    } else if (inputs.password.length < 6 || inputs.password.length > 10) {
      errors.password = "Debe contener entre 6 y 10 caracteres.";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  
  