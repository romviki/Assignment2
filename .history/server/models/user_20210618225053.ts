import mongoose, { PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema; // Schema alias
import passportLocalMongoose from 'passport-local-mongoose';
//let mongoose = require('mongoose');

// create a user class
const UserSchema = new Schema
({
    user: String,
    name: String,
    phone: String,
    email: String,
    password: String
},
{
    collection: "users"
});

UserSchema.plugin(passportLocalMongoose);
const userModel = mongoose.model("users", UserSchema as PassportLocalSchema);

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