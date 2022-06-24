const express = require('express');
const router = express.Router();
const upload =require('../middlewares/uploadImageProduct');
const admincheck = require('../middlewares/admincheck');
const userInsessionCheck=require('../middlewares/userInSessionCheck');
const {creation, edit, update,detail ,store,products, erase, search, cart} = require('../controllers/productController');
const userInSessionCheck = require('../middlewares/userInSessionCheck');


/*Products*/
router.get('/', userInsessionCheck ,products);
router.get('/detail/:id',userInsessionCheck,detail);
router.get('/creation', admincheck, creation);
router.post('/add',upload.array('image'), store);
router.get('/edit/:id', admincheck, edit);
router.put('/update/:id',upload.array('image'),update);
router.delete('/delete/:id',admincheck,erase)
router.get("/search", search);
router.get('/cart',userInSessionCheck,cart)
module.exports = router;
