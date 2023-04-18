const express = require('express');

const port = 9040;

const app = express();

const path = require('path');

app.use(express.urlencoded());

// login system start

const passport = require('passport');
const passportlocal = require('./config/passport-local-stretagy');
const session = require('express-session');
const cookie = require('cookie-parser');

app.use(session({
    secret : "project",
    name : "rushabh",
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : 1000*60*60*24
    }
}));

app.set('view engine' , 'ejs');

app.use(passport.initialize());
app.use(passport.session());
app.use(cookie());
app.use(passport.setAuthentication);

const mongoose = require('./config/mongoose');

app.use('/public',express.static(path.join(__dirname,'public')));

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log('server is not start');
        return false;
    }
    console.log('server start on port :- '+port);
});