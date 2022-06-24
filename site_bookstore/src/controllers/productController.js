const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = require('../data/products.json');

const readProducts = () => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return products
};
module.exports = {
    detail: (req, res) => {
        let products = readProducts();
        const { id } = req.params;
        const product = products.find(producto => producto.id === +id);

        res.render('productos/productDetail', {
            product
        })
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
        let products = readProducts();
        const { id } = req.params;
        return res.render('productos/products', {
            products
        });
    },

    creation: (req, res) => {
        return res.render('admin/creation')
    },

    edit: (req, res) => {
        let product = products.find(product => product.id === +req.params.id);
        return res.render('admin/edit', {
            product
        });
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
        let products = readProducts();
        const { id } = req.params;
        const { keyword } = req.query;
        const result = products.filter(products => products.name.toLowerCase().includes(keyword.toLowerCase())) || products.author.toLowerCase().includes(keyword.toLowerCase()) || products.category.toLowerCase().includes(keyword.toLowerCase());



        return res.render('result', {
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