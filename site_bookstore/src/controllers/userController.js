const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require('../database/models');
const user = require('../database/models/user');
let moment = require('moment');

module.exports={
register:(req,res) =>{
    db.User.findAll()
    .then(user=>{
        return res.render('users/register',{
            user
        })
    }).catch(error =>{
        console.log(error)
    })
    
},
processRegister: (req, res) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){
        const {first_name, last_name, email, password, roles_id, image, country, address, date, preferences} = req.body
        db.User.create({
            first_name: first_name.trim(),
            last_name: last_name.trim(),
            email,
            password: bcrypt.hashSync(password, 10),
            roles_id: 2,
            image: "default-user.jpg",
            country: "default", 
            address: "default", 
            date: "default", 
            preferences: "default"
        },{include:{
            association : "rols"
        }}).then(() => {
            return res.redirect("/users/login");
        }).catch(error => {console.log(error)})
        
    } else {
        res.render("users/register", {
            old: req.body,
            errors: errors.mapped()
        })
    }
},
login: (req, res) => {
    db.User.findAll()
    .then(user=>{
        return res.render('users/login',{
            user
        })
    }).catch(error =>{
        console.log(error)
    })

},
processLogin: (req, res) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){
        const {id, first_name, last_name, image, roles_id} = req.body;
        db.User.findOne({
            where: {email: req.body.email}
        }).then(user => {
            req.session.userLogin ={
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            image: user.image,
            roles_id: user.roles_id
            }
            if (req.body.remember) {
                const TIME_IN_MILISECONDS = 60000;
                res.cookie("paginasCookie", req.session.userLogin, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                });
            
        } return res.redirect('/')})
    } else {
    res.render("users/login", {
        errors: errors.mapped()
    })
}
},
logout: (req, res) => {
    req.session.destroy()
    res.cookie('paginasCookie', null, {maxAge: -1})
    res.redirect('/')
},
profile:(req, res) => {
    db.User.findByPk(req.session.userLogin.id) 
        .then((user) => {
            return res.render('users/profile', {
            user,
          })})
          .catch (error => console.log(error)) 
},
updateProfile: (req, res) =>{
    let errores = validationResult(req);
    if(errores.isEmpty()){
        const {first_name, last_name, country, address, date, image, preferences} = req.body;
        db.User.update({
            first_name : first_name.trim(),
            last_name : last_name.trim(),
            country: country.trim(),
            address : address.trim(),
            date,
            image: req.file ? req.file.filename : image,
            preferences,
        },
        {
            where:{
               id:req.session.userLogin.id
            }
       } )
       .then(() => {
               req.session.userLogin = {
               id : req.session.userLogin.id,
               fist_name: req.body.fist_name,
               last_name: req.body.last_name,
               image: req.file && req.file.filename||req.session.userLogin.image,
               roles_id: req.session.userLogin.rol
               }
           res.redirect('/users/profile')
       })  
        .catch(error => console.log(error))

    } else {
       return res.render('profile', {
           old: req.body,
           errors: errors.mapped(),

       });
}
},
check: async (req, res) => {
    console.log(req.body)
    try {
      let login = await db.User.findOne({
          where : {
            email : req.body.email
          }
      })
      let response ;
            if(login){
                response = {
                    ok: true,
                    data : true,
                    msg: "El mail es valido"
                  }
                  return res.status(200).json(response)
                }else{
                    response ={
                    ok: true,
                    data: false,
                    msg: "El mail no es valido"
                    }
                    return res.status(200).json(response)
                }
           
    } catch (error) {
      console.log(error)
      return res.status(error.status || 500).json({
        ok : false,
        msg : error.message || 'Comuníquese con el administrador del sitio'
      })
    }
  }
}

