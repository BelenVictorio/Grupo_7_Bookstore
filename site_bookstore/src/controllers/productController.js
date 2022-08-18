const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const { Op } = require('sequelize');


module.exports = {
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: ['images']
        })
            .then(products => {
                res.render('productos/productDetail', {
                    products
                })
            })
            .catch(error => console.log(error))
    },
    cart: (req, res) => {
        let products = db.Product.findAll({
            include: ['images']
        })
        let categories = db.Category.findAll()

        Promise.all([products, categories])
            .then(([products, categories]) => {
                return res.render('productos/productCart', {
                    products,
                    categories
                })
            })

            .catch(error => console.log(error))
    },

    products: async (req, res) => {
        try {
            if (req.query.category) {
                let products = await db.Product.findAll(
                    { where: { category_id: req.query.category }, include: ['images'] })
                return res.render('productos/products', { products })
            }
            else {
                let products = await db.Product.findAll({ include: ['images'] })
                return res.render('productos/products',
                    { products })
            }
        }
        catch (error) { console.log(error) }
    },

    search: (req, res) => {

        const { keyword } = req.query;

        db.Product.findAll({
            where: { [Op.or]: [{ name: { [Op.substring]: keyword } }, { description: { [Op.substring]: keyword } },{author: {[Op.substring]: keyword}} ] },
            include: ['images']
        }).then(results => {
            return res.render('result', { results, keyword, })
        }).catch(error => console.log(error))

    },


}