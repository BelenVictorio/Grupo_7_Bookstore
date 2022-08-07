const {check} = require('express-validator');

module.exports = [

    check('first_name')
        .notEmpty().withMessage('Debes colocar un nombre').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras'),
    
    check('last_name')
        .notEmpty().withMessage('Debes colocar un apellido').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras'),
    
    check('address')
        .notEmpty().withMessage('Debes colocar una direccion').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras'),

]