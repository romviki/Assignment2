import mongoose, { PassportLocalSchema } from 'mongoose';
//let mongoose = require('mongoose');

// create a user class
const UserSchema = new Schema

    user: String,
    name: String,
    phone: String,
    email: String,
    password: String
},
{
    collection: "users"
});


declare global
{
    export type UserDocument = mongoose.Document &
    {
        _id: String,
        username: String,
        emailAddress: String,
        displayName: String
    }
}

module.exports = mongoose.model('User', userModel);
export default userModel;