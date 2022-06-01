const {getUsers,writeUsers} =require('../data')
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

module.exports={
register:(req,res) =>{
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

        let newUser = {
            id: lastId + 1,
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file ? req.file.filename : "default-image.png",
            rol: "user"
        }

        getUsers.push(newUser);

        writeUsers(getUsers);

        res.redirect("/users/login");
    } else {
        res.render("users/registro", {
            errors: errors.mapped(),
            old: req.body,
            session: req.session
        })
    }
},
login: (req, res) => {
    return res.render('users/login');
},
processLogin: (req, res) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){
        let user = getUsers.find(user => user.email === req.body.email) 
        
        req.session.user = {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            rol: user.rol
        }

        if (req.body.remember) {
            const TIME_IN_MILISECONDS = 60000;
            res.cookie("paginasCookie", req.session.user, {
                expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                httpOnly: true,
                secure: true
            });
        } 

        res.locals.user = req.session.user

        res.redirect('/')
} else {
    res.render("users/login", {
        errors: errors.mapped(),
        session: req.session
    })
}
},
}