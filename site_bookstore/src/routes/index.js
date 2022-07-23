const express = require('express');
const router = express.Router();
const {index, search, contact}=require('../controllers/indexController')
const admincheck = require('../middlewares/admincheck');

/* GET home page. */
router.get('/',index)
router.get('/search', search)
router.get('/contact', contact)

module.exports = router;
