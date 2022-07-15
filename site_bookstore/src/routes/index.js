const express = require('express');
const router = express.Router();

const {index, search, admin, contact}=require('../controllers/indexController')
const admincheck = require('../middlewares/admincheck');

/* GET home page. */
router.get('/',index)
router.get('/search', search)
router.get('/admin',admincheck, admin)
router.get('/contact', contact)

module.exports = router;
