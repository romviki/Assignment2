let mongoose = require('mongoose');

// create a user class
let userModel = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String
},
{
    collection: "users"
});

module.exports = mongoose.models('Users', userModel);