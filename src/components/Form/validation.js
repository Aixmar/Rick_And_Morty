

export default function validation (inputs) {

const errors = {};

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPass = new RegExp("^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$");

if(!regexEmail.test(inputs.username)) {
    errors.username = "Name must be a valid email adress";
}
if(!inputs.name) {
    errors.username = "Add your name";
}
if(inputs.username.length > 35) {
    errors.username = "Max length 35";
}

if(!regexPass.test(inputs.password)) {
    errors.password = "Password length should be between 6 and 10";
 }
 return errors;
}
    