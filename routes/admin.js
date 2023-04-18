const express = require('express');

const routes = express.Router();

const admincontroller = require('../controllers/admincontroller');

routes.get('/',admincontroller.admin);

module.exports = routes;