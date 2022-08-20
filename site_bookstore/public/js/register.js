console.log('Register success')

const qs =(selector) => document.querySelector(selector);

window.addEventListener('load', ()=>{
    let $form = qs('#registro'),
        $inputName =qs('#first_name'),
        $inputlast_name =qs('#last_name'),
         $email =qs('#email'),
         $password=qs('#password'),
         $password2=qs('#password2'),
         $terms = qs('#terminos'),
         $errorName=qs('#errorName'),
         $errorSurname=qs('#errorSurname'),
         $emailError =qs('#errorEmail'),
         $erorrPass1 =qs('#errorPass1'),
         $errorPass2=qs('#errorPass2'),
         $termsError = qs('#termsError'),
         $submitError =qs('#submitError'),
         $regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
         $regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
         $regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
         
         $valiName = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
         
         let validationsErrors = false;
         
        /*  Start API checks camps */



const email = async (email, num) => {
   // create reusable transporter object using the default SMTP transport
  try {
    let response = await fetch("/api/users/send-mail", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            num : num
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
  } catch (error) {
    console.log(error)
  }
}



const verifyEmail = async (email) => {
    try {
        let response = await fetch("/api/users/check-email", {
            method: "POST",
            body: JSON.stringify({
                email: email,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        let result = await response.json();
        return result.data;
    } catch (error) {
        console.error;
    }
};

/*  End API checks camps */

/* Start FUNCTIONS verify camps */

    

/* End FUNCTIONS verify camps */

        
         
         $inputName.addEventListener('blur', () => {
            switch (true) {
                case !$inputName.value.trim():
                    $errorName.innerHTML = 'El campo nombre es obligatorio';
                    validationsErrors = true
                    break;
                case !$regExAlpha.test($inputName.value):
                    $errorName.innerHTML = 'Debe ingresar un nombre válido';
                    validationsErrors = true;
                    break;
                case !$inputName.value.length > 4:
                    $errorName.innerHTML = 'El nombre debe tener mas de 2 caracteres';
                    validationsErrors = true;
                    break;
                default:
                    $inputName.style.borderColor = 'green';
                    $errorName.innerHTML = '';
                    validationsErrors = false
                    break;
            }
        })
        $inputlast_name.addEventListener('blur', () => {
            switch (true) {
                case !$inputlast_name.value.trim():
                    $errorSurname.innerHTML = 'El campo apellido es obligatorio';
                    validationsErrors = true
                    break;
                case !$regExAlpha.test($inputlast_name.value):
                    $errorSurname.innerHTML = 'Debes ingresar un apellido válido';
                    validationsErrors = true;
                    break;
                case !$inputlast_name.value.length > 4:
                    $errorSurname.innerHTML = 'Ingresa un apellido válido';
                    validationsErrors = true;
                    break;
                default:
                    $inputlast_name.style.borderColor = 'green';
                    $errorSurname.innerHTML = '';
                    validationsErrors = false
                    break;
            }
        })
        $email.addEventListener('blur', () => {
            switch (true) {
                case !$email.value.trim():
                    $emailError.innerHTML = 'El campo email es obligatorio';
                    validationsErrors = true
                    break;
                case !$regExEmail.test($email.value):
                    $emailError.innerHTML = 'El email debe ser válido';
                    validationsErrors = true;
                    break;
                default:
                    $email.style.borderColor = 'green';
                    $emailError.innerHTML = '';
                    validationsErrors = false
                    break;
            }
        })
        $password.addEventListener('blur', () => {
            switch (true) {
                case !$password.value.trim():
                    $erorrPass1.innerHTML = 'El campo contraseña es obligatorio';
                    validationsErrors = true
                    break;
                case !$regExPass.test($password.value):
                    $erorrPass1.innerHTML = 'La contraseña debe tener 1 letra mayúscula, 1 minúscula y/o simbolo';
                    $validationsErrors = true;
                    break;
                case !$password.value.length > 8:
                    $erorrPass1.innerHTML = 'La contraseña debe tener entre 6 y 12 caracteres';
                    validationsErrors = true;
                    break;
                default:
                    $password.style.borderColor = 'green';
                    $erorrPass1.innerHTML = '';
                    validationsErrors = false
                    break;
            }
        })
        $password2.addEventListener('blur', () => {
            switch (true) {
                case !$password2.value.trim():
                    $errorPass2.innerHTML= 'Debes ingresar una contraseña'
                    validationsErrors = true
                    break;
                case !$password2.value.length > 8:
                    $errorPass2.innerHTML = 'Las contraseñas no coinciden';
                    $password2.classList.add('')
                    validationsErrors = true;
                    break;
                default:
                    $password2.style.borderColor = 'green';
                    $errorPass2.innerHTML = '';
                    validationsErrors = false
                    break;
            }
        })
        $terms.addEventListener('blur', () => {
            switch (true) {
                case !$terms.value.trim():
                    $termsError.innerHTML = 'Debes aceptar los términos y condiciones';
                    validationsErrors = true
                    break;
                case !$terms.value.length > 4:
                    $termsError.innerHTML = '';
                    validationsErrors = true;
                    break;
                default:
                    $termsError.innerHTML = '';
                    validationsErrors = false
                    break;
            }
        })
        $form.addEventListener('submit', function (event) {
            event.preventDefault();
    
    
            let error = false;
            let elementsForm = this.elements;
            console.log(elementsForm)
    
            for (let index = 0; index < elementsForm.length - 4; index++) {
                if (elementsForm[index].value == ""
                    
                ) {
                    elementsForm[index].style.borderColor = 'red';
                    $submitError.innerHTML = 'Los campos señalados son obligatorios';
                    error = true;
                }
            }
            if (!$terms.checked) {
                //$terms.classList.add('is-invalid');
                $termsError.innerHTML = 'Debes aceptar los términos y condiciones';
                error = true;
            }
    
            if (!error && !validationsErrors) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  Toast.fire({
                    icon: 'success',
                    title: 'Iniciado sesión con éxito'
                  })
                  
                $form.submit()
            }
        })
})
