if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const port = 3000
const express = require('express')
const app = express()

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const mongoose = require('mongoose')
const authRouter = require('./Router') //import router


app.get('/1', function(req, res) {
    res.render('main.ejs');
});
app.get('/prof', function(req, res) {
    res.render('profmain.ejs');
});

app.get('/auth/reg', (req,res)=>{
    res.render('signup.ejs');
});
app.get('/auth/log', (req,res)=>{
    res.render('signin.ejs');
});

///for css in ejs
app.set('view-engine', 'ejs')
app.use(express.static(__dirname + '/public'));
//----------------------//


app.use(express.json())
app.use("/auth", authRouter) //use router(<url>,<router>)

const start = async () => {
    try{
        //DB
        await mongoose.connect('mongodb+srv://root:Zhak159*@cluster0.4ilsa.mongodb.net/reglog?retryWrites=true&w=majority')

        //port
        app.listen(port, ()=>console.log('server started on port ${PORT}'))
    } catch (e){
        console.log(e)
    }
}

start()






