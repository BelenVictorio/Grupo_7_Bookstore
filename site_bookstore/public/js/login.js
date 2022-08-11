console.log('login.js success')
const q = (selector) => document.querySelector(selector)

window.addEventListener('load',() => {

let $email = q('#email');
let $password = q('#password');
let $emailError = q('#emailError');
let $passError = q('#passError');
let $formlogin = q('#form-login');
let $msgError = q('#submitError');
let $regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let $regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
let validationsErrors = false;
    
    $email.addEventListener('blur', async function () {
        switch (true) {
            case !$email.value.trim():
                $emailError.innerHTML = 'El campo email es obligatorio';
                $emailError.classList.add('invalid')
                break;
            case !$regExEmail.test($email.value):
                $emailError.innerHTML = 'El email debe ser válido';
                $emailError.classList.add('invalid');
                break;
            default:
                $emailError.classList.remove('invalid')
                $emailError.classList.add('invalid')
                $emailError.innerHTML = null;
                break;
        }
    })
    $password.addEventListener('blur', async () => {
        switch (true) {
            case !$password.value.trim():
                $passError.innerHTML = 'El campo de contraseña es obligatorio';
                $passError.classList.add('invalid')
                break;
            case !$regExPass.test($password.value):
                    $passError.innerHTML = 'La contraseña debe tener al menos 1 letra mayúscula, 1 minúscula y/o un simbolo. Recuerde que no puede ser menor a 8';
                    validationsErrors = true;
                break;
            default:
                $passError.classList.remove('invalid')
                $passError.classList.add('invalid')
                $passError.innerHTML = null;
                break;
        }

    })

    $formlogin.ddEventListener('submit', function (event) {
        event.preventDefault();
        let error = false;
        let elementsForm = this.elements;
        console.log(elementsForm)

        for (let index = 0; index < elementsForm.length - 3; index++) {
            if (elementsForm[index].value == "") {
                elementsForm[index].classList.add('invalid');
                $msgError.innerHTML = 'Los campos señalados son obligatorios';
                error = true;
            }
        }

        if (!error && !validationsErrors) {
            
            $formlogin.submit()
        }
    })
})
