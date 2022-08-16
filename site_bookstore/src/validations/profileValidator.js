const {check} = require('express-validator');

module.exports = [

    check('first_name')
        .notEmpty().withMessage('Debes colocar un nombre').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras'),
    
    check('last_name')
        .notEmpty().withMessage('Debes colocar un apellido').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras'),

    check('country')
        .notEmpty().withMessage('Debes elegir un pais').bail(),
    
    check('address')
        .notEmpty().withMessage('Debes colocar una direccion').bail()
        .isLength({min:3}).withMessage('Debe tener como minimo 3 letras'),
    
    check('date')
        .notEmpty().withMessage('Debes colocar una fecha').bail()
        .isNumeric().withMessage('Debes colocar un numero'),
    
    check('image')
    .custom(( value, {req} ) => {
        let fileExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!req.file){
            return Promise.reject('campo requerido')
        }if(!fileExtensions.exec(req.file.filename)){
            return Promise.reject('Solo archivos con estas extensiones .jpeg/.jpg/.png/.gif only.')
        }else{
            return true
        }
    }),
    
    check('preferences')
        .notEmpty().withMessage('Debes colocar una categoria que te guste').bail(),

]