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
UserSchema.plugin(passport_local_mongoose_1.default);
const Model = mongoose.model("User", UserSchema);
exports.default = Model;
//# sourceMappingURL=user.js.map