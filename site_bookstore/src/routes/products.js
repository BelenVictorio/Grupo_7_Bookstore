const express = require('express');
const router = express.Router();

const {detail, cart, products} =require('../controllers/productsController');

/* /products */
router.get('/detail/:id',detail);
router.get('/cart', cart);
router.get('/products', products)

module.exports = router;