const express = require('express');

const routes = express.Router();

routes.get('/', (serverRequest,serverAnswer) => {
    return serverAnswer.json({message: `opaaaaaaaa ${serverRequest.query.name}`});
});

routes.post('/dev', (serverRequest, serverAnswer) => {
    console.log(serverRequest.body);
    return serverAnswer.json({ok : true});
});

module.exports = routes;