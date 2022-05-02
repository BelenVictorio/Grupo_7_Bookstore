module.exports = {
     
    index: (req,res)  => {
     res.render('products/listProducts', {
          products,
     })
    },

    create: (req,res)  => {
     res.render('admin/addProductForm')
    },
    
    detail: (req,res)  => {
          let productId = +req.params.id;
          let product = products.find(product => product.id === productId);

          res.render('products/productDetail', {
               product,
          })
     },
    
    addProduct: (req ,res)  => {
          let lastId = 0;
          products.forEach(product => {
               if(product.id > lastId){
                    lastId = product.id
               }
          });

          let newProduct = {
			...req.body,
			id: lastId + 1,
			image: req.file ? req.file.filename : "Anubisshop.png"
		}

          products.push(newProduct);

		writeProducts(products);

		res.send('El producto a sido creado exitosamente.')
		

    },

    edit: (req,res)  => {
          let productId = +req.params.id;
          let product = products.find(product => product.id === productId);

          res.render('admin/editProductForm', {
               product
          })
         
     },
    
    addEdit: (req,res)  => {

     let productId = +req.params.id;

          products.forEach(product => {
               if(product.id === productId){
                    product.name = req.body.name
                    product.price = req.body.price
                    product.description = req.body.description
               }
          })

          writeProducts(products);

          res.send(`Modificaste el producto exitosamente!`)
         
    },
    
    delete: (req,res)  => {
          let productId = +req.params.id;
          let productToDelete;

          products.forEach(product => {
               if(product.id === productId){
                    productToDelete = product.name
                    let productToDeleteIndex = products.indexOf(product);
                    products.splice(productToDeleteIndex, 1);
               }
          });
          
          writeProducts(products)

          res.send('Eliminaste el producto')
    },

    productCart: (req,res) => {
         res.render('products/productCart')
    }
    
}