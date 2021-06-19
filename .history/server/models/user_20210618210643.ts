let mongoose = require('mongoose');
import passportLocalMongoose from 'passport-local-mongoose';


// create a user class
let userModel = mongoose.Schema({
    user: String,
    name: String,
    phone: String,
    email: String,
    password: String
},
{
    collection: "users"
});

userModel.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userModel);