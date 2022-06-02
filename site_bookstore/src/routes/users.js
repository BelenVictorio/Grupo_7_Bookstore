var express = require('express');
var router = express.Router();

const {register,processRegister ,processLogin,login} = require('../controllers/userController');

/* validaciones */
const loginValidator = require('../validations/loginValidator');

/* users */
router.get('/register', register);
router.post('/register', processRegister);
router.get('/login', login);
router.post('/login', loginValidator, processLogin);

module.exports = router;
