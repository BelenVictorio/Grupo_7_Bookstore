const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize')



module.exports = {

  index: (req, res, ) => {
     db.Product.findAll()
      .then(products => {
        res.render('index', {
          products,
        });
      }).catch(error => console.log(error))

  },
  search: (req, res) => {
    let busqueda = req.query.search.toLowerCase()
    db.Product.findAll({
      where : {
        [Op.or] : [
          {name: {[Op.substring] : busqueda }},
          {author: {[Op.substing] : busqueda }}
        ]
      }
    })
    .then(products => {
      res.render('products', {
        products,
      })
    })
    .catch(error => console.log(error));
    
  },
  admin: (req, res) => {
    res.render('admin')
  }
}