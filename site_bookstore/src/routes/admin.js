const express = require('express');
const router = express.Router();

const {admin,creation, edit, update, erase, search, store} =require('../controllers/adminController');


/* /products */

/* listado de productos */
router.get('/',admin)
router.get('/search', search);

/* formulario y creacion de productos */
router.get('/creation', creation);
router.post('/creation', store);

/* formulario y edicion de producto */
router.get('/edit/:id', edit);
router.put('/update/:id', update);

/* Eliminar un producto */
router.delete('/delete/:id', erase)

module.exports = router;