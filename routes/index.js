const express = require('express');

const routes = express.Router();

const passport = require('passport');

const logincontroller = require('../controllers/logincontroller');

routes.use('/',require('./login'));
routes.use('/admin',passport.chekUserLogin,require('./admin'));
routes.use('/signup',require('./signup'));

module.exports = routes;