const mongoose = require('mongoose');

const userLogSchema = new mongoose.Schema({
    name: {
        type: String,

        required: true
    },
    surname: {  

        type: String,

        required: true
    },
    email: {    

        type: String,

        required: true, 

        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {  

        type: String,

        required: true
    },

    password: {
        type: String,   

        required: true
    },
    role: {
        type: String,                   

        enum: ['admin', 'user'],

        default: 'user'
    }

});

module.exports = mongoose.model('UserLog', userLogSchema);