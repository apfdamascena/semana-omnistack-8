const developer = require('../models/developers');

module.exports = {
    async store(serverRequest, serverAnswer){
        const {developerId} = serverRequest.params;
        const {user} = serverRequest.headers;

        const loggedDeveloper = await developer.findById(user);
        const whoWillReceive = await developer.findById(developerId);

        if(!whoWillReceive){
            return serverAnswer.status(400).json({error: "dev does not exist"})
        }

        if(whoWillReceive.likes.includes(loggedDeveloper._id)){
            console.log("deu match");
        }

        loggedDeveloper.likes.push(whoWillReceive._id);
        await loggedDeveloper.save();

        return serverAnswer.json(loggedDeveloper);
    }

};