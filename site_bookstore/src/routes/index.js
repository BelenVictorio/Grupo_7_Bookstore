const express = require('express');
const router = express.Router();

const {index, search, admin}=require('../controllers/indexController')
const admincheck = require('../middlewares/admincheck');

/* GET home page. */
router.get('/',index)
router.get('/search', search)
router.get('/admin',admincheck, admin)

module.exports = router;
