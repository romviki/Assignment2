import { PassportLocalSchema } from 'mongoose';
//import mongoose, { PassportLocalSchema } from 'mongoose';
let mongoose = require('mongoose');
const Schema = mongoose.Schema; // Schema alias
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
({
    userName: String,
    fullName: String,
    userPhone: String,
    userEmail: String,
    password: String
},
{
    collection: "users"
});

UserSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("User", UserSchema as PassportLocalSchema);


/*
declare global
{
    export type UserDocument = mongoose.Document &
    {
        _id: String,
        user: String,
        name: String,
        phone: String,
        email: String,
        password: String
    }
}
*/

export default Model;