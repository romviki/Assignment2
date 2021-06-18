let mongoose = require('mongoose');

// create a user class
let usersModel = mongoose.Schema({
    username: String,
    password: String,
    email: String
},
{

});