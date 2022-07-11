const {getUsers,writeUsers} =require('../data')
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require('../database/models');

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
        const {first_name, last_name, email, password, roles_id, image} = req.body
        db.User.create({
            first_name: first_name.trim(),
            last_name: last_name.trim(),
            email,
            password: bcrypt.hashSync(password, 10),
            roles_id: 2,
            image: "default-user.jpg"
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
   // return res.render('users/login');
},
processLogin: (req, res) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){
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
        const {nombre, apellido, pais, direccion, fecha, avatar, preferencias} = req.body
        const {id} = getUsers.find(user => user.id === req.session.userLogin.id)
        const usersModify = getUsers.map(user => {
            if(user.id === +id){
                let userModify = {
                    ...user,
                    nombre : nombre.trim(),
                    apellido : apellido.trim(),
                    pais,
                    direccion : direccion.trim(),
                    fecha,
                    avatar,
                    preferencias: getUsers.push(preferencias)
                }
                const {id, category} = userModify
                req.session.userLogin = {
                     id,
                    nombre,
                    category
                }
                res.locals.userLogin === req.session.userLogin;
                return userModify;
            }
            return user;
        })
        writeUsers(usersModify)
        return res.redirect('/')
    }else{
        console.log(errores);
        return res.render('profile', {
            user: req.body,
            errors: errores.mapped(),
            session: req.session
        })
    }
    }
}



/*
register:(req,res) =>{
    db.User.findAll()
    .then(user => {
        console.log(user)})
        .catch(error => { console.log(error)})

    return res.render('users/register');
},
processRegister: (req, res) => {
    let errors = validationResult(req);
    let lastId = 0;
    if(errors.isEmpty()){
        getUsers.forEach(user => {
            if (user.id > lastId) {
                lastId = user.id;
            }
        });

    const {id,first_name, last_name, email, passsword, rol_id, image} = req.body
    db.User.create({
        first_name: first_name.trim(),
        last_name: last_name.trim(),
        email: email.trim(),
        password: bcrypt.hashSync(password, 10),
        rol_id: 2,
        image: "default-user.jpg"
        }).then(() => {
            return res.redirect("/users/login");
        }).catch(error => {console.log(error)})
    /*let lastId = 0;
    if(errors.isEmpty()){
        getUsers.forEach(user => {
            if (user.id > lastId) {
                lastId = user.id;
            }
        });

        let newUser = {
            id: lastId + 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file ? req.file.filename : "default-image.png",
            category: "user"
        }

        getUsers.push(newUser);

        writeUsers(getUsers);
*/
        //levantar sesion
   /*     req.session.userLogin = {
            id,
            rol_id,
            image
        }

    } else {
        res.render("users/register", {
            old: req.body,
            errors: errors.mapped(),
            session: req.session
        })
    }
},
login: (req, res) => {
    db.User.findAll()
    .then(user => {
        console.log(user)})
        .catch(error => { console.log(error)})

    return res.render('users/login');
},
processLogin: (req, res) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){
        const {email} =req.body
        db.User.findOne({
            where: {email}
        }).then(user => {
            req.session.userLogin ={
            id: +id,
            first_name,
            last_name,
            image,
            rol_id
            }
            if (req.body.remember) {
                const TIME_IN_MILISECONDS = 60000;
                res.cookie("paginasCookie", req.session.userLogin, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                });
            
        } return res.redirect('/')})
        .catch(error=>{console.log(error)})
        /*req.session.userLogin = {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            category: user.rol
        }

        if (req.body.remember) {
            const TIME_IN_MILISECONDS = 60000;
            res.cookie("paginasCookie", req.session.userLogin, {
                expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                httpOnly: true,
                secure: true
            });
        })*/
        //res.locals.userLogin = req.session.userLogin
     /*   
        
} else {
    res.render("users/login", {
        errors: errors.mapped(),
        session: req.session
    })
}
}


*/