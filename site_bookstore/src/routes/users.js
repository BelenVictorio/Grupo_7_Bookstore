var express = require('express');
var router = express.Router();

const {register,processRegister ,processLogin,login} = require('../controllers/userController');
const registerValidator = require('../validations/registerValidator')

/* users */
router.get('/register', register);
router.post('/register', registerValidator, processRegister);
router.get('/login', login);
router.post('/login', processLogin);

module.exports = router;
