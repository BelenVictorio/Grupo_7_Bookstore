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
},
creation: (req, res) => {
    return res.render('creation');
},
edit: (req, res) => {
    return res.render('edit');
},
update: (req, res) => {
    return res.send('update')
},
erase: (req, res) => {
    return res.send('erase')
}
}