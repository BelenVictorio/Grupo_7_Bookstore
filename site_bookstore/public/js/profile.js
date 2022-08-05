console.log('profile.js success');
const $ =(selector) => document.querySelector(selector);

window.addEventListener('blur', ()=>{
    let formprofile = $('#form-profile');
    let msgError= $('#submitError')
    let body= $('body')
    let firstname= $('#first_name');
    let nameError= $('#firstError')
    let inputlast =$('#last_name');
    let lastError = $('#lastError')
    let image = $('#image');
    let imgError = $('#imgError')
    let regExImage = /(.jpg|.jpeg|.png|.gif)$/i;
    let country = $('#country');
    let countryError = $('#countryError')
    let address= $('#address');
    let addressError= $('#addressError')
    let date = $('#country');
    let dateError = $('#dateError');

    let validationsErrors = false
    let perfil = confirm('¿Queres cambiar el estilo de tu perfil?');
    if(perfil){
        body.style.color('#')
    }


    firstname.addEventListener('load', () => {
        switch (true) {
            case !firstname.value.trim():
                nameError.innerHTML = 'El campo nombre es obligatorio';
                nameError.classList.add('invalid')
                break;
            case !firstname.value.length > 3:
                nameError.innerHTML = 'El nombre debe tener mas de 3 caracteres';
                nameError.classList.add('invalid');
                break;
            default:
                lastError.classList.remove('invalid');
                nameError.classList.add('invalid');
                nameError.innerHTML = null;
                break;
        }
    })
    inputlast.addEventListener('blur', () => {
        switch (true) {
            case !inputlast.value.trim():
                lastError.innerHTML = 'El campo apellido es obligatorio';
                lastError.classList.add('invalid');
                break;
            case !inputlast.value.length > 3:
                lastError.innerHTML = 'Ingresa un apellido válido';
                lastError.classList.add('invalid');
                break;
            default:
                lastError.classList.remove('invalid');
                lastError.classList.add('invalid');
                lastError.innerHTML = null;
                break;
        }
        country.addEventListener('blur', () =>{
            switch (true) {
                case !country.value.trim():
                    countryError.innerHTML = 'Debes seleccionar un pais';
                    countryError.classList.add('invalid');
                    break;
                    default:
                        countryError.classList.remove('invalid');
                        countryError.classList.add('invalid');
                        countryError.innerHTML = null;
                        break;
            }
        })
        address.addEventListener('blur', () => {
            switch (true) {
                case !address.value.trim():
                    addressError.innerHTML = 'El campo direccion es obligatorio';
                    addressError.classList.add('invalid');
                    break;
                case !address.value.length > 3:
                    addressError.innerHTML = 'Ingresa una direccion válida. Minimo mas de 3 caracteres';
                    lastError.classList.add('invalid');
                    break;
                default:
                    addressError.classList.remove('invalid');
                    addressError.classList.add('invalid');
                    lastError.innerHTML = null;
                    break;
            }
        })
        date.addEventListener('blur', (e) => {
            switch (true) {
                case !date.value:
                    dateError.innerHTML = 'Debes poner tu fecha de nacimiento'
                    date.classList.add('invalid')
                    break;
                default:
                    dateError.classList.remove('product-invalid')
                    dateError.classList.add('invalid');
                    dateError.innerHTML = null;
                    break;
            }
        })
        image.addEventListener('change', () => {
            switch(true){
                case !regExExtensions.exec(image.value):
                    imgError.innerHTML = 'El formato del archivo es invalido, ingrese alguno de estos: ".jpg", "png", ".gif", "jpeg"';
                    img.classList.add('invalid');
                break;
                default:
                    imgError.classList.remove('invalid')
                    imgError.classList.add('invalid');
                    imgError.innerHTML = null;
                    break;
            }
        })
        formprofile.addEventListener('submit', function (event) {
            event.preventDefault();
            let error = false;
            let elementsForm = this.elements;
            console.log(elementsForm)
    
            for (let index = 0; index < elementsForm.length - 2; index++) {
                if (elementsForm[index].value == "") {
                    elementsForm[index].classList.add('invalid');
                    msgError.innerHTML = 'Los campos señalados son obligatorios';
                    error = true;
                }
            }
    
            if (!error && !validationsErrors) {
                
                formprofile.submit()
            }
        })
    })

})
