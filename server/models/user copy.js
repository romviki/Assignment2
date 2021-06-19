"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const UserSchema = new Schema({
    username: String,
    password: String
}, {
    collection: "users"
});
const ContactSchema = new Schema({
    contactName: String,
    contactPhone: String,
    contactEmail: String,
}, {
    collection: "contacts"
});
UserSchema.plugin(passport_local_mongoose_1.default);
const userModel = mongoose.model("User", UserSchema);
const contactModel = mongoose.model("Contact", UserSchema);
exports.default = userModel;
exports.default = contactModel;
//# sourceMappingURL=user%20copy.js.map