const express = require('express');
const router = express.Router();

const userInsessionCheck=require('../middlewares/userInSessionCheck');
const {detail ,products, search, cart} = require('../controllers/productController');
const userInSessionCheck = require('../middlewares/userInSessionCheck');


/*Products*/
router.get('/',products);
router.get('/detail/:id',userInsessionCheck,detail);
router.get("/search", search);
router.get('/cart',userInSessionCheck,cart)
module.exports = router;
