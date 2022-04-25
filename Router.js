const Router = require('express')
const router = new Router()
const controller = require('./authControl') //import class authControl
const {check} = require("express-validator") //validator

//sign up
router.post('/reg', [
    check('email', "Please, write email").isEmail(),
    check('password', "At least 4 symbols and no more than 10").isLength({min:4, max:10})
], controller.reg)

//sign in
router.post('/log', controller.log)

//users
router.get('/users', controller.getUsers)



// export router
module.exports = router