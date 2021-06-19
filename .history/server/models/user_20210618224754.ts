let mongoose = require('mongoose');

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

module.exports = mongoose.model('User', userModel);
export default userModel;