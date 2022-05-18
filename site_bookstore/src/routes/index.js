const express = require('express');
const router = express.Router();

const {index, search, admin}=require('../controllers/indexController')

/* GET home page. */
router.get('/',index)
router.get('/search', search)
module.exports = router;
