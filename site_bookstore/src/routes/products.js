const express = require('express');
const router = express.Router();

const {detail, cart, products, creation, edit, update, erase, search} =require('../controllers/productsController');

/* /products */

/* listado de productos */
router.get('/',products)
router.get('/search', search);

/* formulario y creacion de productos */
router.get('/creation', creation);
router.post('/cart', cart);

/* detalle de producto */
router.get('/detail/:id',detail);

/* formulario y edicion de producto */
router.get('/:id/edit', edit);
router.put('/:id', update)

/* Eliminar un producto */
router.delete('/:id', erase)



module.exports = router;