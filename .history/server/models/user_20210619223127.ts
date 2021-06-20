/* index.ts : Viktoriia Romaniuk : 301079072 : 2021-06-17 */

import mongoose from 'mongoose';
import { PassportLocalSchema } from 'mongoose';
//import mongoose, { PassportLocalSchema } from 'mongoose';////
let mymongoose = require('mongoose');
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

UserSchema.plugin(passportLocalMongoose);

const Model = mymongoose.model("User", UserSchema as PassportLocalSchema);



declare global
{
    export type UserDocument = mongoose.Document &
    {
        _id: String,
        username: String,
        password: String
    }
}

export default Model;