const passport = require('passport');
// const Admin = require('../models/studentModel');
const mysql = require('mysql');

const jwtStrategy = require('passport-jwt').Strategy;

const jwtExtract = require('passport-jwt').ExtractJwt;

let opts = {
    jwtFromRequest  : jwtExtract.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'user'
};

passport.use(new jwtStrategy(opts,(payload,done)=>{
    Admin.findOne({id : payload._id},(err,user)=>{
        if(err){
            return done(err,false);
        }
        if(user)
        {
            console.log(user);
            return done(null,user);
        }
        else{
            return done(null, false);
        }
    });
}));


module.exports = passport;