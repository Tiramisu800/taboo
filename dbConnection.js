const mongoose = require('mongoose')

const URL = 'mongodb+srv://root:Zhak159*@cluster0.4ilsa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options = {}

function dbConnection(){
    mongoose.connect(URL, options)

}

module.exports = dbConnection;