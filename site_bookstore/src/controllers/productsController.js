const products = require('../data/products')

module.exports={
detail:(req,res) =>{
    return res.render('productDetail',{
        products
    });
}
}