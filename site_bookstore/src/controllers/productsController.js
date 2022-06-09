const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = require('../data/products.json');

const readProducts = () => {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products
}; 
module.exports={
    detail: (req, res) => {
        let products= readProducts(); 
        const {id} = req.params;
        const product = products.find(producto => producto.id === +id);

        res.render('productos/productDetail', {
            product
        })
    },

cart: (req, res) => {
    return res.render('productos/productCart');
},

products: (req, res) => {
    let products= readProducts(); 
        const {id} = req.params;
    return res.render('productos/products',{
        products
    });
},

search : (req,res) => {
        let products= readProducts(); 
        const {id} = req.params;
        const {keyword} = req.query;
        const result = products.filter(products => products.name.toLowerCase().includes(keyword.toLowerCase()) )|| products.author.toLowerCase().includes(keyword.toLowerCase()) || products.category.toLowerCase().includes(keyword.toLowerCase());
        
        
        
            return res.render('result',{
                products: result,
                keyword
                
            })
        },
        erase: (req, res) => {
            let productDelete = products.filter(product => product.id !== +req.params.id);
            saveProducts(productDelete);
            return res.redirect('/products');
        }
}