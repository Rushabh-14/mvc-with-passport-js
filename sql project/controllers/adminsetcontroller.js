const mysql = require('mysql');

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

module.exports.insert = (req,res) => {
    let {name,quantity} = req.body;

    let insertquery = "INSERT INTO `adminset`(`name`,`quantity`) VALUES ('"+name+"','"+quantity+"')";

    con.query(insertquery,(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : "data insert sucessfuly"});
    });
}

module.exports.viewdata = (req,res) => {
    let viewquery = "SELECT * FROM `adminset`";

    con.query(viewquery,(err,data)=>{
        if(err) throw err;
        return res.json({"record" : data});
    });
}

module.exports.deletedata = (req,res)=>{
    let id = req.query.id;

    let deletequery = 'DELETE FROM `adminset` WHERE id = ?';
    con.query(deletequery,[id],(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : "data delete sucessfuly"});
    });
};

module.exports.updatedata = (req,res)=>{
    let id = req.query.id;
    let {name,quantity} = req.body;

    let updatequery = "UPDATE `adminset` SET `name`='"+name+"',`quantity`='"+quantity+"' WHERE id = ?";
    con.query(updatequery,[id],(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : "data update sucessfuly"});
    });
}

module.exports.addproduct = (req,res) => {
    let {product_name,product_price,adminset_id} = req.body;

    let insertquery = "INSERT INTO `product_category`(`product_name`,`product_price`,`adminset_id`) VALUES ('"+product_name+"','"+product_price+"','"+adminset_id+"')";

    con.query(insertquery,(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : "product insert sucessfuly"});
    });
}

module.exports.viewproducts = (req,res) => {
    let name = req.body.name;
    let viewproductsquery = "SELECT adminset.id,name,quantity,product_category.product_id,product_name,product_price FROM product_category INNER JOIN adminset ON adminset.id = product_category.adminset_id WHERE name = ?";
    con.query(viewproductsquery,[name],(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : data});
    });
};

module.exports.carproductadd = (req,res) => {
    let {car_name,car_price,product_calegory_id} = req.body;

    let caraddquery = "INSERT INTO `car_product`(`car_name`,`car_price`,`product_calegory_id`) VALUES ('"+car_name+"','"+car_price+"','"+product_calegory_id+"')";

    con.query(caraddquery,(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : "car insert sucessfuly"});
    });
}

module.exports.bikeproductadd = (req,res) => {
    let {bike_name,bike_price,product_calegory_id} = req.body;

    let bikeaddquery = "INSERT INTO `bike_product`(`bike_name`,`bike_price`,`product_calegory_id`) VALUES ('"+bike_name+"','"+bike_price+"','"+product_calegory_id+"')";

    con.query(bikeaddquery,(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : "bike insert sucessfuly"});
    });
}

module.exports.carproductsview = (req,res) => {
    let carname = req.body.carname;
    let viewproductsquery = "SELECT product_category.product_id,product_name,car_product.car_id,car_name,car_price FROM car_product INNER JOIN product_category ON product_category.product_id = car_product.product_calegory_id WHERE product_name = ?";
    con.query(viewproductsquery,[carname],(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : data});
    });
};

module.exports.bikeproductsview = (req,res) => {
    let bike_name = req.body.bike_name;
    let viewproductsquery = "SELECT product_category.product_id,product_name,bike_product.bike_id,bike_name,bike_price FROM bike_product INNER JOIN product_category ON product_category.product_id = bike_product.product_calegory_id WHERE product_name = ?";
    con.query(viewproductsquery,[bike_name],(err,data)=>{
        if(err) throw err;
        return res.status(200).json({"messege" : data});
    });
};