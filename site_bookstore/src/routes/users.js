var express = require('express');
var router = express.Router();

const {register,processRegister ,processLogin,login, logout, profile, updateProfile} = require('../controllers/userController');

/*  Middlewares */
const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')
const upload = require('../middlewares/uploadImageProduct');
const userCheck = require('../middlewares/userInSessionCheck')
const sessionCheck=require('../middlewares/sessionCheck');

/* users */
router.get('/register',sessionCheck, register);
router.post('/register',upload.single('image') ,registerValidator, processRegister);
router.get('/login', sessionCheck ,login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', logout);
router.get('/profile', userCheck, profile);
router.put('/updateprofile', updateProfile)

module.exports = router;
