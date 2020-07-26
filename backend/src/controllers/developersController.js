const axios = require('axios');
const developers = require('../models/developers');

module.exports = {
    async index(serverRequest, serverAnswer){
        const {user} = serverRequest.headers;
        const loggedDeveloper = await developers.findById(user);

        const users = await developers.find({
            $and: [
                { _id:{$ne: user}},
                {_id: {$nin: loggedDeveloper.likes}},
                {_id: {$nin: loggedDeveloper.dislikes}}
            ],
        })
        return serverAnswer.json(users);
    },
    async store(serverRequest, serverAnswer){
        const {username} = serverRequest.body;
        const doesTheUserExist = await developers.findOne({user: username});
        const dataUserReference = await axios.get(`https://api.github.com/users/${username}`);

        if(doesTheUserExist){
            return serverAnswer.json(doesTheUserExist);
        }

        const {name, bio: biography, avatar_url: avatar} = dataUserReference.data;
        const DeveloperInfo = await developers.create({
            name,
            user: username,
            biography,
            avatar
        })
        return serverAnswer.json(DeveloperInfo);
    }
}