const passport = require('passport');

const passportlocal = require('passport-local').Strategy;

const admin = require('../moduls/adminmodule');

passport.use(new passportlocal({
    usernameField : "email"
},(email,password,done)=>{
    admin.findOne({email : email},(err,user)=>{
        if(err){
            console.log("some thing is wrong");
            return done(null,false);
        }
        if(!user || user.password != password){
            console.log("email and password not found");
            return done(null,false);
        }
        return done(null,user);
    });
}));    

passport.serializeUser((user,done)=>{
    return done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    admin.findById(id,(err,user)=>{
        if(err){
            console.log('email and password not match');
            return done(null,false);
        }
        return done(null,user);
    });
});

passport.chekUserLogin = (req,res,next) => {
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/');
};

passport.setAuthentication = (req,res,next) => {
    if(req.isAuthenticated())
    {
        res.locals.user = req.user;
    }
    next();
};

module.exports = passport;