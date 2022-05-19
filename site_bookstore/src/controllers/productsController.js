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

store: (req, res) => {
    return res.render('productCart')
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
},

search : (req,res) => {
        
    const {keyword} = req.query;
    const result = products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));

    /* let namesCategories = categories.map(category => {
        return {
            id : category.id,
            name : category.name
        }
    }); */

    return res.render('result',{
        products : result,
        keyword,
        
    })
},
}