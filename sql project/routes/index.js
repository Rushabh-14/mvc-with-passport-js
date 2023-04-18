const express = require('express');

const routes = express.Router();

routes.use('/adminset',require("./adminset"));
routes.use('/userset',require("./userset"));

module.exports = routes;