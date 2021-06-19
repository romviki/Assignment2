import mongoose, { PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema; // Schema alias
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
({
    user: String,
    name: String;
    phone: String,
    email: String,
    password: String
},
{
    collection: "users"
});

UserSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("User", UserSchema as PassportLocalSchema);


export default Model;