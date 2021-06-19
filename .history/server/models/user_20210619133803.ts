import { PassportLocalSchema } from 'mongoose';
import mongoose from 'mongoose';
//import mongoose, { PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema; // Schema alias
//import passportLocalMongoose from 'passport-local-mongoose';
//let mongoose = require('mongoose');


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

//UserSchema.plugin(passportLocalMongoose);

//const Model = mongoose.model("User", UserSchema as PassportLocalSchema);

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

// create a user class
/*
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
*/
const Model = mongoose.model('Users', UserSchema);

export default Model;