const axios = require('axios');

module.exports = {
    async store(serverRequest, serverAnswer){
        const {username} = serverRequest.body;
        const dataUserReference = await axios.get(`https://api.github.com/users/${username}`);
        return serverAnswer.json(dataUserReference.data);
    }
}