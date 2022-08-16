var express = require('express');
var router = express.Router();
const { admin, creation, store, edit, update, erase, list, } = require('../controllers/adminControllers');
const  admincheck  = require('../middlewares/admincheck');
const upload = require('../middlewares/uploadImageProduct');
const validateProduct = require('../validations/addproductValidator');


router
      .get('/',/* admincheck */ admin)
    .get('/creation', /* admincheck */ creation)
    .post('/add',upload.array('image'), validateProduct, store) 
    .get('/edit/:id', /* admincheck */ edit)
    .put('/update/:id',upload.array('image'), validateProduct, update)
    .delete('/delete/:id',/* admincheck */erase)
    .get('/list',/* admincheck */ list)

        


module.exports = router;