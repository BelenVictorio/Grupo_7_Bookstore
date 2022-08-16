var express = require('express');
var router = express.Router();

const { check, sendMail} = require('../../controllers/api/userControl');

/*  Middlewares */

/* users */

/* API */
router.post('/check',check);
router.post('/sendMail',sendMail)


module.exports = router;
