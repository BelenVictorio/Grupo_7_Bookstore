const products = require('../data/products')

module.exports={
detail:(req,res) =>{
    return res.render('productDetail',{
        products
    });
},
cart: (req, res) => {
    return res.render('productCart');
},
products: (req, res) => {
    return res.render('products',{
        products
    });
}
}