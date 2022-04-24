if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const dbConnection = require('./dbConnection')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//--------Database Mongoose---------------
mongoose.connect('mongodb://localhost/reglog')

const User = mongoose.Schema({//Schema of model
    id: String,
    username: {
        type: String,
        default: "user"
    }
})

const MyModel = mongoose.model('User', User, 'Users'); //created model (<name of model>,<schema of model>,<to db's collection>)
//------------------------
dbConnection()
//-----------------------------------------

app.get('/1', function(req, res) {
    res.render('main.ejs');
});
app.get('/prof', function(req, res) {
    res.render('profmain.ejs');
});



const initializePassport = require('./passport-config')
const dbConnection = require("./dbConnection");
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session( ));
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'));



//-------------------------------------------
// Passport JS
app.get('/', checkAuthenticated, (req, res) => {
    res.render('profile.ejs', { name: req.user.name })
})


app.get('/sign', checkNotAuthenticated, (req, res) => {
    res.render('signin.ejs');
})

app.post('/sign',checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/sign',
    failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res)=> {
    res.render('signup.ejs');
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/sign')
    } catch {
        res.redirect('/register')
    }
})

app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/sign')
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/sign')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}


app.listen(port)







