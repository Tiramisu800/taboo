require('dotenv').config()

//Requests
const express =require('express')
const mongoose = require('mongoose')

const { createServer } = require('http')
const port = process.env.PORT || 3000;

   /* for to validate and authentication*/
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const User = require('./modules/User')

const bcrypt = require('bcrypt')

const {
    checkAuthenticated,
    checkNotAuthenticated
} = require('./middlewares/auth')
   /*------------------------------------------*/

const app = express()



//Find users
const initializePassport = require('./passport-config')
const {check} = require("express-validator");
const {locals} = require("express/lib/application");
const res = require("express/lib/response");
initializePassport(
    passport,
    async(email)=>{
        const userFound = await User.findOne({email})
        return userFound
    },
    async(id) =>{
        const userFound = await User.findOne({_id: id})
        return userFound
    }
)



///for css in ejs1
app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.use(express.static(__dirname + '/public'));

app.get('/prof', (req, res) => {
    res.render('profmain.ejs');
});
app.get('/', (req, res) => {
    res.render('main.ejs');
});
app.get('/programmer', (req, res) => {
    res.render('programmer.ejs');
});
app.get('/astronaut', (req, res) => {
    res.render('astronaut.ejs');
});
app.get('/chef', (req, res) => {
    res.render('chef.ejs');
});
app.get('/musician', (req, res) => {
    res.render('musician.ejs');
});
app.get('/test',checkAuthenticated, (req, res) => {
    res.render('test.ejs');
});
app.get('/tryit', (req, res) => {
    res.render('tryit.ejs');
});
///---Authenticated or not???---///

app.get('/logout', checkAuthenticated, (req,res)=>{
    res.render("profile.ejs", { name: req.user.name })//GO TO PROFILE!!!! NOT MAIN
})
app.get('/log',checkNotAuthenticated, (req,res)=>{
    res.render('signin.ejs')
})
app.get('/reg',checkNotAuthenticated, (req,res)=>{
    res.render('signup.ejs')
})



   //---Login case---//
app.post('/log',checkNotAuthenticated, passport.authenticate('local',{
    successRedirect: '/logout',
    failureRedirect: '/log',
    failureFlash: true,
})
)

app.post('/test',checkNotAuthenticated, (req, res)=>{if(!locals.session.loggedin){
    res.redirect('/test')
}
else {
    res.redirect('/log')
}})





   //---Register case---//
app.post('/reg', checkNotAuthenticated, async (req,res)=>{
    const userFound = await User.findOne({email: req.body.email})

    if(userFound){
        req.flash('error', 'User already exist (??-??)')
        res.redirect('/reg')
    }
    else{
        try{
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            })

            await user.save() //Add to DB
            res.redirect('/log')
        }catch (e){
            console.log(e)
            res.redirect('reg')
        }
    }
})

   //---Log out---//
app.delete('/logout', (req,res)=>{
    req.logOut()
    res.redirect('/log')
} )



///---MongoDB connect---///

mongoose.connect('mongodb+srv://root:Zhak159*@cluster0.1h8mm.mongodb.net/taboo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
}).then(()=>console.log('MongoDb connected'))
    .catch(e => console.log(e))

const server = createServer(app)
server.listen(port, ()=>console.log('server is up.'))