const express = require('express');

const routes = express.Router();

const usersetcontroller = require('../controllers/usersetcontroller');

routes.post('/user_register',usersetcontroller.user_register);
routes.post('/user_login',usersetcontroller.user_login);
routes.get('/view_user',usersetcontroller.view_user);
routes.delete('/delete_user',usersetcontroller.delete_user);
routes.patch('/update_user',usersetcontroller.update_user);
routes.get('/viewproduct',usersetcontroller.viewproduct);

module.exports = routes;    