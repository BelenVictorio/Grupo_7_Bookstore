let welcom = prompt(`Bienvenida ${first_name}`)
let confirm = confirm ('¿Deseas cambiar el estilo de tu perfil?');
while (welcom === ""){welcom = prompt(`Bienvenida ${first_name}`)}

const qs =(selector) => document.querySelector(selector);

window.addEventListener('load', ()=>{

    let $form = qs('#profile');
    let $inputName =qs('#first_name');
    let $nameError= qs('firstError')
    let $inputlast =qs('#last_name');
    let $lastError = qs('#lastError')
    let $image = qs('#image');
    let $country = qs('#country');
    let $address= qs('#address');
    let $addressError= qs('#addressError')
    let $date = qs('#country');
    let $dateError = qs('#dateError')


})