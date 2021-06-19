"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContactSchema = new Schema({
    contactName: String,
    contactNumber: String,
    contactEmail: String,
    userId: String
}, {
    collection: "contacts"
});
const Model = mongoose.model("Contact", ContactSchema);
exports.default = Model;
//# sourceMappingURL=contact.js.map