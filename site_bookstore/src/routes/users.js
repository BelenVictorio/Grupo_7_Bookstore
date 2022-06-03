var express = require('express');
var router = express.Router();

const {register,processRegister ,processLogin,login, logout, profile, updateProfile} = require('../controllers/userController');

/*  Middlewares */
const registerValidator = require('../validations/registerValidator')

const userCheck = require('../middlewares/userInSessionCheck')


/* users */
router.get('/register', register);
router.post('/register', registerValidator, processRegister);
router.get('/login', login);
router.post('/login', processLogin);
router.get('/logout', logout);
router.get('/profile', userCheck, profile);
router.put('/updateprofile', updateProfile)

module.exports = router;
