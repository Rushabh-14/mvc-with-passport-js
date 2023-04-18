const express = require('express');

const routes = express.Router();

const signupcontroller = require('../controllers/signupcontroller');

routes.get('/',signupcontroller.home);
routes.post('/signupdata',signupcontroller.insert);

module.exports = routes;