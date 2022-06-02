const {check, body} = require('express-validator');
const req = require('express/lib/request');

module.exports = [

    check('nombre')
        .notEmpty().withMessage('Debes colocar un nombre').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras')
        .isAlpha().withMessage('Solo letras'),
    
    check('apellido')
        .notEmpty().withMessage('Debes colocar un apellido').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras')
        .isAlpha().withMessage('Solo letras'),
        
    check('email')
        .notEmpty().withMessage('Debes colocar un email').bail()
        .isEmail().withMessage('Email no valido'),
        
    check('password')
    .notEmpty().withMessage('Debes colocar una contraseña').bail()
    .isLength({min:8}).withMessage('Debe tener como minimo 8 caracteres'),

    body('password2')
        .custom((value,{req}) => {
                if(value !== req.body.password){
                    return false
            }
            return true
        }).withMessage('Las contraseñas no coinciden')
]