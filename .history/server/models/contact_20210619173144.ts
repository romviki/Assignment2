//import mongoose, { PassportLocalSchema } from 'mongoose';
let mongoose = require('mongoose');
const Schema = mongoose.Schema; // Schema alias



const ContactSchema = new Schema
({
    contactName: String,
    contactPhone: String,
    contactEmail: String,
},
{
    collection: "contacts"
});

const Model = mongoose.model("Contact", ContactSchema as PassportLocalSchema);

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