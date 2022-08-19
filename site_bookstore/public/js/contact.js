emailjs.init('c3TtjTDJw8zfZ4pNd')

document.getElementById('contact-form').addEventListener('submit', (e) =>{
    e.preventDefault();
    const elements = e.target.elements;
    const data ={
        name: elements.name.value,
        email: elements.email.value,
        msg: elements.msg.value,
        from_name: "Paginas bellas",
    }
    emailjs.send('service_p43lhhr', 'template_fk40zmb', data)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    },function(error){
        console.log('Failed!...', error);
    })
})