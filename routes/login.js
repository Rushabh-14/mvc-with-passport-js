const express = require('express');

const passport = require('passport');

const routes = express.Router();

const logincontroller = require('../controllers/logincontroller');

routes.get('/',logincontroller.login);
routes.post('/logindata',passport.authenticate('local',{failureRedirect : '/'}),logincontroller.logindata);
routes.get('/logout',logincontroller.logout);
routes.post('/emaildata',logincontroller.emaildata);

module.exports = routes;