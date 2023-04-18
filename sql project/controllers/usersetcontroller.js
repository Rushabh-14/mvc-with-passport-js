const mysql = require('mysql');

const jwtData = require('jsonwebtoken');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "mysql_project"
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports.user_register = (req,res) => {
    let {name,email,password} = req.body;

    let insertquery = "INSERT INTO `userset`(`name`,`email`,`password`) VALUES ('"+name+"','"+email+"','"+password+"')";

    con.query(insertquery,(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : "user insert sucessfully"});
    });
};

module.exports.user_login = (req,res) =>{
    let user_email = req.body.email;
    let user_password = req.body.password;
    let loginquery = `SELECT * FROM userset WHERE email = "${user_email}"`;
    con.query(loginquery,[user_email],(err,data)=>{
        if(data.length > 0){
            for(let count = 0; count < data.length; count++){
                if (data[count].password == user_password) {
                    // const token = jwtData.sign(data.toJSON(),'user',{expiresIn:1000*60*60});
                    // return res.status(200).json({"user_data" : data,"Messege":token});
                    return res.status(400).json({"messege" : data});
                }
                else{
                    return res.status(400).json({"messege" : "password is not metch"});
                }
            }
        }
        return res.status(400).json({"messege" : "email is not metch"});
    });
}

module.exports.view_user = (req,res) =>{
    let viewquery = "SELECT * FROM `userset`";

    con.query(viewquery,(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : data});
    });
};

module.exports.delete_user = (req,res) => {
    let id = req.query.id;

    let viewquery = "DELETE FROM `userset` WHERE id = ?";

    con.query(viewquery,[id],(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : "user delete sucessfully"});
    });
}

module.exports.update_user = (req,res) => {
    let id = req.query.id;
    let {name,email,password} = req.body;

    let updatequery = "UPDATE `userset` SET `name`='"+name+"',`email`='"+email+"',`password`='"+password+"' WHERE 1";

    con.query(updatequery,[id],(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : "user update sucessfully"});
    });
};

module.exports.viewproduct = (req,res) =>{
    // let product = req.body.product;
    let viewproductquery = "SELECT adminset.id,name,quantity,product_category.product_id,product_name,product_price FROM product_category INNER JOIN adminset ON adminset.id = product_category.adminset_id";
    con.query(viewproductquery,(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : data});
    });
}