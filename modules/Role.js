//use schema & model from mogoose
const {Schema, model} = require('mongoose')

//default role's schema
const Role = new Schema({
    value: {type: String, unique: true, default: "user"},
})

module.exports = model('Role', Role) // (<name>,<schema>)