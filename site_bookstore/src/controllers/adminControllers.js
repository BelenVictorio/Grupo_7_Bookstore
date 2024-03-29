
const db = require('../database/models');

const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = {
    list: (req,res) =>{
        db.Product.findAll()
            .then((products) => {
              return res.render("list", { 
                products 
            });
            })
            .catch((error) => console.log(error));
        
    },
    admin: (req, res) => {
        res.render('admin')
    },
    creation: (req, res) => {
        db.Product.findAll()
        .then(products => {
            return res.render('admin/creation',{
                products
            })
        })
        .catch(error => console.log(error))
        
    },

    store: (req, res) => {
        const { name, author, description, price, category_id, images_id, genres_id } = req.body;

        db.Product.create({
            name: name,
            author: author,
            description: description,
            price: +price,
            genres_id: +genres_id,
            images_id: +images_id,
            category_id: category_id,

        })
            .then(product => {
                if (req.files) {
                    let images = req.files.map(({ filename }) => {
                        let image = {
                            name: filename,
                            product_id: product.id,
                        }
                        return image
                    })
                    db.Image.bulkCreate(images)
                        .then((result) => console.log(result))
                        
                } else {
                    db.Image.create({
                        name: 'not-found.jpg',
                        product_id: product.id,
                    })
                }
                return res.redirect('list')
            })
            .catch(error => console.log(error))
    },
    edit: (req, res) => {
        let product = db.Product.findByPk(req.params.id)
        let category = db.Category.findAll()

        Promise.all([product, category])
            .then(([products, categories]) => {
                return res.render('admin/edit', {
                    products,
                    categories
                })
            })
            .catch(error => console.log(error))

    },

 
    update: (req, res) => {
        const { name, author, description, price, category_id } = req.body;

        db.Product.update(
            {
                name: name,
                author: author,
                description: description,
                price: +price,
                category_id: +category_id,
            },
            {
                where: {
                    id: req.params.id
                }
            }

        ).then(async () => {
            if (req.files) {
                try{
                    await db.Image.update(
                        {
                            name: req.files.filename
                        },
                        {
                            where: {
                                product_id : req.params.id
                            }
                        }
                    )
                } catch(error){
                    console.log(error)
                }
                }
                return res.redirect('/admin/list')
                
        }).catch(error => console.log(error))

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

    erase: (req, res) => {
        db.Product.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(() => {
            return res.redirect('/products')
        })
        .catch(error => console.log(error))
        
    }
}