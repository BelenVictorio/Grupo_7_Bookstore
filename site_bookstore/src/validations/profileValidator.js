const {check} = require('express-validator');

module.exports = [

    check('nombre')
        .notEmpty().withMessage('Debes colocar un nombre').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras')
        .isAlpha().withMessage('Solo letras'),
    
    check('apellido')
        .notEmpty().withMessage('Debes colocar un apellido').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras')
        .isAlpha().withMessage('Solo letras'),
    
    check('direccion')
        .notEmpty().withMessage('Debes colocar una direccion').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras'),

]