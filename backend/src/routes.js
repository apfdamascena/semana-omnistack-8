const express = require('express');
const developersController = require('../src/controllers/developersController.js')

const routes = express.Router();

routes.post('/dev', developersController.store);

module.exports = routes;