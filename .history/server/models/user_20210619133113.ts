import mongoose, { PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema; // Schema alias
import passportLocalMongoose from 'passport-local-mongoose';

// Define User schema
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

// Use passport Local 
UserSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("User", UserSchema as PassportLocalSchema);
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

export default Model;