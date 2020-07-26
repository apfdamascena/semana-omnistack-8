const express = require('express');
const developersController = require('./controllers/developersController');
const likeController = require('./controllers/likeController');
const dislikeController = require('./controllers/dislikeController');

const routes = express.Router();

routes.get('/dev', developersController.index);
routes.post('/dev', developersController.store);
routes.post('/dev/:developerId/likes', likeController.store);
routes.post('/dev/:developerId/dislikes', dislikeController.store);

module.exports = routes;