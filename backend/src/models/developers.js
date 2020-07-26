const {Schema, model} = require('mongoose');

const developersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true
    },
    biography: {
        type: String
    },
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'dev',
    }],    
}, {
    timestamps: true,
});

module.exports = model('dev', developersSchema);