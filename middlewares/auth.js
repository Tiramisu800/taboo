function  checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect("/1")
    }
    next();
}

function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/log")
}

module.exports = {
    checkNotAuthenticated,
    checkAuthenticated
}