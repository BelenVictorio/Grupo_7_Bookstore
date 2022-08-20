console.log('Email Success');
/* Inicializando la biblioteca emailjs con la identificación del usuario. */
emailjs.init('OUsigyvkjXsC3BIcE')
document.getElementById('#registro').addEventListener('submit', (e) => {
    e.preventDefault();
    const elements = e.target.elements;
    const data = {
        name: elements.name.value,
        email: elements.email.value,
        message: 'Gracias por Registrarte',
        from_name: "Paginas Bellas"
    }
    console.log(e.target.elements.name)
    emailjs.send('service_n13324t', 'template_8g0r99d', data)
        .then(function (response) {
            console.log('SUCCESS', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        })
})

