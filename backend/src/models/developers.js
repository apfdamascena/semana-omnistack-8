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
    }
}, {
    timestamps: true,
});

module.exports = model('dev', developersSchema);