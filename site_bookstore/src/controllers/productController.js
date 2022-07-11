const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const {Op} = require('sequelize');


module.exports = {
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            includes : ['images', 'authors']
        })
        .then(products => {
             res.render('productos/productDetail', {
                products
            })
        })
        .catch(error => console.log(error))
    },

    store: (req, res) => {

        const { name, author, description, price, category } = req.body;

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


    cart: (req, res) => {
        return res.render('productos/productCart');
    },

    products: (req, res) => {
        db.Product.findAll({
            includes : ['images', 'authors']
        })
			.then(products => {
                return res.render('productos/products', {
                    products
                })
			})
			.catch(error => console.log(error))
    },

    creation: (req, res) => {
        return res.render('admin/creation')
    },

    edit: (req, res) => {
        
        
    },

    update: (req, res) => {
        const { name, author, description, price, category } = req.body;
        let productsModify = products.map(product => {
            if (product.id === +req.params.id) {
                let productModify = {
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
        return res.redirect('/products')
    },

    search: (req, res) => {
        
        const {keyword} = req.query;

        db.Product.findAll({ where: {[Op.or]: [{name: {[Op.substring]: keyword}},{description: {[Op.substring]: keyword}}]},
            
        }).then(results => {return res.render('result', {results,keyword,})
        }).catch(error => console.log(error))
    },
    erase: (req, res) => {
        let productDelete = products.filter(product => product.id !== +req.params.id);
        saveProducts(productDelete);
        return res.redirect('/products');
    }
}