const multer = require('multer');
const path = require('path');

/* MULTER */
const storageUser = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images/userImg')
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storageUser
});

module.exports = upload