const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');

const readProducts = () => {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products
}; 
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const guardarJson = (array) => fs.writeFileSync(productsFilePath, JSON.stringify(array, null, 3));

module.exports={
    detail: (req, res) => {
        let products= readProducts(); 
        const {
            id
        } = req.params;
        const product = products.find(producto => producto.id === +id);

        res.render('productDetail', {
            product
        })
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

edit : (req,res) => {

    const {id} = req.params;
    const product = products.find(product => product.id === +id);

    return res.render('edit',{
        product
    })
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