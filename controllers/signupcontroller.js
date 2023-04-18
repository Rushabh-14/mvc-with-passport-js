const admin = require('../moduls/adminmodule');

module.exports.home = (req,res)=>{
    return res.render('signup');
};

module.exports.insert = (req,res) => {
    admin.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
        gander : req.body.gander
    },(err)=>{
        if(err){
            console.log("data is not insert");
            return false;
        }
        console.log('data insert sucessfuly');
        return res.redirect('/');
    });
}