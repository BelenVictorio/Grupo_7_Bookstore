const express = require('express');
const router = express.Router();

const {index, search, admin}=require('../controllers/indexController')
const adminCheck = require('../middlewares/adminCheck');

/* GET home page. */
router.get('/',index)
router.get('/search', search)
router.get('/admin', adminCheck, admin)

module.exports = router;
