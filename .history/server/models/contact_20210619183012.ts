//import mongoose, { PassportLocalSchema } from 'mongoose';
let mongoose = require('mongoose');
const Schema = mongoose.Schema; // Schema alias



const ContactSchema = new Schema
({
    contactName: String,
    contactNumber: String,
    contactEmail: String,
    userId: String
},
{
    collection: "contacts"
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model;