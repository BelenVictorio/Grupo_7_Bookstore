var express = require('express');
var router = express.Router();

const {register,processRegister ,processLogin,login} = require('../controllers/userController');

/* users */
router.get('/register', register)
router.get('/login', login)

module.exports = router;
