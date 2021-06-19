import { PassportLocalSchema } from 'mongoose';
//import mongoose, { PassportLocalSchema } from 'mongoose';
let mongoose = require('mongoose');
const Schema = mongoose.Schema; // Schema alias
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
({
    username: String,
    password: String
},
{
    collection: "users"
});


const ContactSchema = new Schema
({
    contactName: String,
    contactPhone: String,
    contactEmail: String,
},
{
    collection: "contacts"
});

UserSchema.plugin(passportLocalMongoose);

const userModel = mongoose.model("User", UserSchema as PassportLocalSchema);
const contactModel = mongoose.model("Contact", UserSchema as PassportLocalSchema);

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

export default userModel;
export default contactModel;