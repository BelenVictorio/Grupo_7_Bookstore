let qs = (selector) => document.querySelector(selector);

window.addEventListener('load', () => {
    let editProduct = qs('#editValidator'),
        name = qs('#name'),
        author = qs('#author'),
        description = qs('#description'),
        formato = qs('#formato'),
        categories = qs('#categorias'),
        price = ('//#price'),
        cuotas = qs('#cuotas'),
        img = qs('#img'),
        allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i,
        errorName = qs('#errorName'),
        errorImg = qs('#errorImg')

    name.addEventListener('blur', () => {
        switch (true) {
            case !name.value:
                name.classList.add('is-invalid');
                errorName.innerHTML = "Este campo es obligatorio";
                errors = true; 
                break;
            case name.value.length <= 5:  
                 name.classList.add('is-iinvalid'); 
                 errorName.innerHTML = "Debes ingresar por lo menos 5 caracteres";
                 errors = true; 
                break; 
        
            default:
                name.classList.remove('is-iinvalid');
                name.classList.add('is-valid');
                errorName.innerHTML = '';
                errors = false;
                break;
        }
    }); 
    
    description.addEventListener('blur', () => {
        switch (true) {
            case !description.value:
                description.classList.add('is-invalid');
                errorDescripcion.innerHTML = "Ingrese Descripción";
                errors = true; 
                break;
            case description.value.length <= 20:  
                 description.classList.add('is-invalid'); 
                 errorDescripcion.innerHTML = "Debes ingresar por lo menos 20 caracteres";
                 errors = true; 
                break; 
        
            default:
                description.classList.remove('is-iinvalid');
                description.classList.add('is-valid');
                errorDescripcion.innerHTML = '';
                errors = false;
                break;
        }
    });

    img.addEventListener('change', () => {
        switch (true) {
          case !allowedExtensions.exec(img.value):
            img.classList.add('is-invalid');
            errorImg.innerHTML = 'El formato debe ser: jpg, jpge, png, gif';
            errors = true;
            break;
          default:
            img.classList.remove('is-invalid');
            img.classList.add('is-valid');
            errorImg.innerHTML = '';
            errors = false;
            break;
        }
      });

      editProduct.addEventListener('submit', (e) => {
        let errors = true;
        e.preventDefault();
        let elementsForm = editProduct.elements;
        console.log(elementsForm);
    
        for (let i = 0; i < elementsForm.length - 2; i++) {
          if (elementsForm[i].value === '' || elementsForm[i].classList.contains('is-invalid')) {
            elementsForm[i].classList.add('is-invalid');
            errorForm.innerHTML = 'Complete los campos requeridos';
            errors = true;
          } else {
            errors = false;
          }
        }
        if (errors == false) {
          errorForm.innerHTML = '';
          alert('Producto editado');
          editProduct.submit();
        }
      });  

})