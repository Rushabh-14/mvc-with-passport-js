const admin = require('../moduls/adminmodule');

const nodemailer = require('nodemailer');

module.exports.login = (req,res) => {
    if(!res.locals.user) {
        return res.render('login');
    }
    return res.redirect('/admin');
}

module.exports.logindata = (req,res) => {
    return res.redirect('/admin');
};

module.exports.logout = (req,res) => {
    req.logout((err)=>{
        if(err){
            console.log('page not logout');
            return false;
        }
        console.log('logout sucessfuly');
        return res.redirect('/');
    });
};

module.exports.emaildata = (req,res) => {
    let email = req.body.email;
    admin.findOne({email : email},(err,emailuser)=>{
        if(err){
            console.log('email is not meatch');
            return false;
        }
        let otp = Math.floor(Math.random() * 10000000);
        let transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
            user: "parmarrushabh22@gmail.com",// a22f924e0bd390
            pass: "ktllcgokpbxvsjhp"
            }
        });
        let mailOptions = {
            from: 'parmarrushabh22@gmail.com',
            to: email,
            subject: 'Nice Nodemailer test',
            text: 'Hey there, it’s our first message sent with Nodemailer ',
            html: 'YOUR OTP IS HIAR :-'+otp,
        };
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                    return console.log(error);
            }
            res.cookie('newpassotp',{
                email : email,
                otp : otp
            })
            console.log('OTP SEND SUCESSFULY :- '+otp);
            return res.render('otp');
        });
    });
};