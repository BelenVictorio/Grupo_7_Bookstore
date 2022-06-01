var express = require('express');
var router = express.Router();

const {register,processRegister ,processLogin,login} = require('../controllers/userController');

/* users */
router.get('/register', register);
router.post('/register', processRegister);
router.get('/login', login);
router.post('/login', processLogin);

module.exports = router;
