let qs = (selector) => document.querySelector(selector);

window.addEventListener('load', () => {
    let form = qs('form'),
        name = qs('#name'),
        author = qs('#author'),
        description = qs('#description'),
        formato = qs('#formato'),
        categorias = qs('#categorias'),
        price = ('//#price'),
        cuotas = qs('#cuotas'),
        img = qs('#img'),
        allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    name.addEventListener('blur', () => {
        switch (true) {
            case !name.value:
                name.classList.add('es inválido')
                
                break;
        
            default:
                break;
        }
    })    

})