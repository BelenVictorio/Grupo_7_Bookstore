const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require('sequelize')



module.exports = {

  index: (req, res, ) => {
     db.Product.findAll({
    include:['images']})
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

  contact: (req,res) =>{
  db.Product.findAll()
      .then(() => {
        res.render('contact');
      }).catch(error => console.log(error))}
}