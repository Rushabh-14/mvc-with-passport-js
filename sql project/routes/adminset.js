const express = require('express');

const routes = express.Router();

const adminsetcontroller = require('../controllers/adminsetcontroller');

routes.post('/adminsetinsert',adminsetcontroller.insert);
routes.get('/viewdata',adminsetcontroller.viewdata);
routes.delete('/deletedata',adminsetcontroller.deletedata);
routes.patch('/updatedata',adminsetcontroller.updatedata);
routes.post('/addproduct',adminsetcontroller.addproduct);
routes.get('/viewproducts',adminsetcontroller.viewproducts);
routes.post('/carproductadd',adminsetcontroller.carproductadd);
routes.post('/bikeproductadd',adminsetcontroller.bikeproductadd);
routes.get('/carproductsview',adminsetcontroller.carproductsview);
routes.get('/bikeproductsview',adminsetcontroller.bikeproductsview);

module.exports = routes;    