var express = require('express');
var router = express.Router();
const { admin, creation, store, edit, update, erase, list, } = require('../controllers/adminControllers');
const admincheck = require('../middlewares/admincheck');
const upload = require('../middlewares/uploadImageUser');


router
      .get('/',admincheck, admin)
    .get('/creatiom', admincheck, creation)
    .post('/add',upload.array('image'), store) 
    .get('/edit/:id', admincheck, edit)
    .put('/update/:id',upload.array('image'),update)
    .delete('/delete/:id',admincheck,erase)
    .get('/list',admincheck, list)

        


module.exports = router;