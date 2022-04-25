const User = require('./modules/User')
const Role = require('./modules/Role')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')

//Individual token for users
const {secret} = require("./config")

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret,{expiresIn: "24h"});
}
//-----------------------------------------///

class authControl{
    //Sign up
    async reg(req, res){
        try {
            //validate request
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Sign up error!", errors})
            }
            ///-----------------------------------//


            const {email, password} = req.body
            const candiUser = await User.findOne({email}) //findOne - function to find
            if(candiUser){ //users are unique
                return res.status(400).json({message: "User already exist (¬-¬)"})
            } //else create user
            const hashPassword = bcrypt.hashSync(password, 7); //to hide password
            const userRole = await Role.findOne({value: "user"}) //find role
            const user = new User({email, password: hashPassword, roles: [userRole.value]}) //user created
            await user.save() //save in DB
            return res.json({message: "User successfully sign up ^^"})
        }catch (e) {
            console.log(e)
            res.status(400).json({message: 'Sign up error ( ・◇・)？'})
        }
    }

    //Sign in
    async log(req, res){
        try {
            const{email, password}=req.body
            const user = await User.findOne({email})
            if(!user){
                return res.status(400).json({message:"User ${email} not found"})
            }

            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){return res.status(400).json({message:"Wrong password"})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})

        }catch (e) {
            console.log(e)
            res.status(400).json({message: 'Sign in error ( ・◇・)？'})
        }

    }

    //List of users
    async getUsers(req, res){
        try {
            // for creation collection in DB
            /*const userRole = new Role()
            const adminRole = new Role({value: "admin"})
            await userRole.save() //put in DB
            await adminRole.save()*/

            const users = await  User.find()
            res.json(users)

        }catch (e) {
            
        }

    }
}

module.exports = new authControl() //export class authControl