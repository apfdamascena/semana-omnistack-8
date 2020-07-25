const express = require('express');

const server = express();
server.get('/', (serverRequest,serverAnswer) => {
    return serverAnswer.json({message: `Hello ${serverRequest.query.name}`});
});
server.listen(2608);