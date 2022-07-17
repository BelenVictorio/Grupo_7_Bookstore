const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const {Op} = require('sequelize');


module.exports = {
    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(products => {
             res.render('productos/productDetail', {
                products
            })
        })
        .catch(error => console.log(error))
    },

    store: (req, res) => {

        const { name, author_id, description, price, category_id } = req.body;

        db.Product.create({
            name: name,
            author_id: +author_id,
            description: description,
            price: +price,
            category_id: +category_id,

        })
        .then(product => {
            if(req.files.length > 0) {
                let images = req.files.map(({filename}, i) => {
                    let image = {
                        name : filename,
                        product_id: product.id,
                        primary: i === 0 ? 1 : 0
                    }
                    return image
                })
                db.Image.bulkCreate(images, {validate:true})
                .then((result) => console.log(result))
            }
            return res.redirect('productos/products')
        })
        .catch(error => console.log(error))

       /*  let lastID = products[products.length - 1].id;

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

        return res.redirect('/') */


    },


    cart: (req, res) => {
        let products = db.Product.findAll({
            include : ['images']
        })
        let categories = db.Category.findAll()

        Promise.all([products,categories])
        .then(([products, categories]) => {
            return res.render('productos/productCart', {
                products,
                categories
            })
        })
        
        .catch(error => console.log(error))
    },

    products: (req, res) => {
        db.Product.findAll()
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
        let product = db.Product.findByPk(req.params.id)
        let category = db.Category.findAll()
        
        Promise.all([product,category])
        .then(([products,categories]) => {
            return res.render('admin/productEdit', {
                products,
                categories
            })
        })
        .catch(error => console.log(error))
    
    },
   

    update: (req, res) => {
        const { name, author_id, description, price, category_id } = req.body;

        db.Product.update(
            {
                name,
            author_id: +author_id,
            description: description,
            price: +price,
            category_id: +category_id,
            },
            {
                where: {
                    id: req.params.id
                }
            }
            
            ).then(() => {
                if(req.file) {
                    db.Image.update(
                        {
                            name: req.file.filename
                        }
                    )
                }
            })

        /* let productsModify = products.map(product => {
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
        return res.redirect('/products') */
    },

    search: (req, res) => {
        
        const {keyword} = req.query;

        db.Product.findAll({ where: {[Op.or]: [{name: {[Op.substring]: keyword}},{description: {[Op.substring]: keyword}}]},
            
        }).then(results => {return res.render('result', {results,keyword,})
        }).catch(error => console.log(error))

    },
    
    erase: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        
        .then(() => {
            return res.redirect('productos/products')
        })
        
        .catch(error => console.log(error))


        /* let productDelete = products.filter(product => product.id !== +req.params.id);
        saveProducts(productDelete);
        return res.redirect('/products'); */
    }
}