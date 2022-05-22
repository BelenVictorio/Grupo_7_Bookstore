const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = require('../data/products.json');

const readProducts = () =>{
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return products;
} 
const saveProducts = (products) => fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3));

module.exports={
detail:(req,res) =>{
    return res.render('productDetail',{
        readProducts
    });
},

cart: (req, res) => {
    return res.render('productCart');
},

store: (req, res) => {

    const {name, author, description, price, category } = req.body;

    let lastID = products[products.length - 1].id;

    let newProduct = {
        id: +lastID + 1,
        name,
        author,
        description,
        price: +price,
        category,
        image: "not-found.jpg"
    }

    products.push(newProduct);

    fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), JSON.stringify(products, null, 3), 'utf-8');

    return res.redirect('/')

    
},

products: (req, res) => {
    return res.render('products',{
        readProducts
    });
},

creation: (req, res) => {
    return res.render('creation')
},

edit: (req, res) => {
    let products = readProducts();
    let productEdit = products.find(product => product.id === +req.params.id);
    return res.render('edit', {
        productEdit
    });
},

update: (req, res) => {
    let products = readProducts();
    const {name, author, description, price, category} = req.body;
    let productsModify = products.map(product => {
        if(product.id === +req.params.id){
            let productModify ={
                ...product,
                name: name.trim(),
                author: author.trim(),
                description: description.trim(),
                price: +price,
                category
            }
            return productModify
        }
        return product
    })
    saveProducts(productsModify);
    return res.redirect('/products/products');
},

erase: (req, res) => {

    let products = readProducts();
    let productDelete = products.filter(product => product.id !== +req.params.id)
    saveProducts(productDelete);
    return res.redirect('/products/products');
},

search : (req,res) => {
    let products = readProducts();
        const {keyword} = req.query;
        const result = products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()) || product.author.toLowerCase().includes(keyword.toLowerCase()) || product.category.toLowerCase().includes(keyword.toLowerCase()));
        
            /* let namesCategories = categories.map(category => {
                return {
                    id : category.id,
                    name : category.name
                }
            }); */
        
            return res.render('result',{
                products: result,
                keyword
                
            })
        }
}