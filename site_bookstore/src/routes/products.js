const express = require('express');
const router = express.Router();

const {detail, cart, products, search,} =require('../controllers/productsController');

/* /products */

/* listado de productos */
router.get('/',products)
router.get('/search', search);

/* carrito */
router.get('/cart', cart);

/* detalle de producto */
router.get('/detail/:id',detail);

module.exports = router;