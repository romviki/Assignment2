let mongoose = require('mongoose');

// create a user class
let userModel = mongoose.Schema({
    username: String,
    password: String,
    email: String
},
{
    collection: "users"
});

module.exports = mongoose.module('Users', userModel);