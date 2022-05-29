const products = require('../data/products')

module.exports={
register:(req,res) =>{
    return res.render('usuarios/register');
},
login: (req, res) => {
    return res.render('usuarios/login');
}
}