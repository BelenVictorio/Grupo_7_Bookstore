 const bcryptjs = require('bcryptjs');
const {check, body } = require('express-validator');
const users = require('../data/users.json')

module.exports = [

    check('email')
        .notEmpty()
        .withMessage('Debes ingresar un email')
        .bail()
        .isEmail()
        .withMessage('Debes ingresar un email válido'),

    body('password')
        .notEmpty()
        .withMessage('Debes ingresar la contraseña')
        .bail()
        .custom( (value,{req}) => {

            const user = users.find(user => user.email === req.body.email); 

                if(!user){
                    console.log(user);
                    return false
                } else {
                    if(!bcryptjs.compareSync(value, user.password)) { 
                        console.log(user);
                    return false
                }
            }
            return true
        })
        .withMessage('Credenciales inválidas'),

]