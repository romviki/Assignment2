"use strict";
let mongoose = require('mongoose');
let userModel = mongoose.Schema({
    user: String,
    name: String,
    phone: String,
    email: String,
    password: String
}, {
    collection: "users"
});
module.exports = mongoose.model('User', userModel);
//# sourceMappingURL=user.js.map