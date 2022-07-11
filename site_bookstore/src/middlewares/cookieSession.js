const cookieSession = (req, res, next) => {
    if(typeof req.cookies !== "undefined"){
        if (req.cookies.paginasCookie){
            req.session.userLogin = req.cookies.paginasCookie;
            res.locals.userLogin = req.session.userLogin;
        }
        next()
    }
}

module.exports = cookieSession;