const {check, body} = require('express-validator');
//const req = require('express/lib/request');
const users = require('../data/usersDataBase.json')
const db = require('../database/models')

module.exports = [

    check('first_name')
        .notEmpty().withMessage('El campo nombre es obligatorio').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras')
        .isAlpha().withMessage('Solo letras'),
    
    check('last_name')
        .notEmpty().withMessage('El campo apellido es obligatorio').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras')
        .isAlpha().withMessage('Solo letras'),
        
    check('email')
        .notEmpty().withMessage('Debes colocar un email').bail()
        .isEmail().withMessage('Email no valido').bail()
        .custom((value,{req}) => {
             return db.User.findOne({
                where: {
                    email: req.body.email
                }}) .then(user =>{
                    if(user) {
                        return Promise.reject() 
                     }}).catch(() => Promise.reject('Este mail ya se encuentra registrado'))
        }),
        
        check('password')
        .notEmpty()
        .withMessage('Debes escribir una contraseña')
        .isLength({
            min: 8,
            max: 12
        })
        .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
    body('password2')
        .custom((value,{req}) => {
                if(value !== req.body.password){
                    return false
            }
            return true
        }).withMessage('Las contraseñas no coinciden'),
        
    check('terminos')
        .isString('on').withMessage('Debes aceptar terminos y condiciones')
]