"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processDeletePage = exports.processEditPage = exports.displayEditPage = exports.processAddPage = exports.displayAddPage = exports.displayUserList = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_1 = __importDefault(require("../models/user"));
const contact_1 = __importDefault(require("../models/contact"));
function displayUserList(req, res, next) {
    contact_1.default.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('users/list', { title: 'Business Contact List', ContactList: contactList });
        }
    });
}
exports.displayUserList = displayUserList;
function displayAddPage(req, res, next) {
    res.render('users/add', { title: 'Add New Contact' });
}
exports.displayAddPage = displayAddPage;
function processAddPage(req, res, next) {
    let newUser = new user_1.default({
        "username": req.body.username,
        "password": req.body.password
    });
    let userId = newUser._id;
    console.log("NewUser Id: " + userId);
    let newContact = new contact_1.default({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "contactEmail": req.body.contactEmail,
        "userId": userId,
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error('Error: Inserting New User');
            console.error(err);
            if (err.name == 'UserExistsError') {
                console.error('Error: User Already Exists');
            }
            return res.redirect('/users/list');
        }
    });
    contact_1.default.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/users/list');
        }
    });
}
exports.processAddPage = processAddPage;
function displayEditPage(req, res, next) {
    let id = req.params.id;
    contact_1.default.findById(id, (err, contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('users/edit', { title: 'Edit Contact', contactToEdit: contact });
        }
    });
}
exports.displayEditPage = displayEditPage;
function processEditPage(req, res, next) {
    let id = req.params.id;
    let updateContact = new contact_1.default({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "contactEmail": req.body.contactEmail,
    });
    contact_1.default.updateOne({ "_id": id }, updateContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/users/list');
        }
    });
}
exports.processEditPage = processEditPage;
function processDeletePage(req, res, next) {
    let contactId = req.params.id;
    let userId = req.params.userId;
    contact_1.default.remove({ "_id": contactId }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            user_1.default.remove({ userId }, (err) => {
                if (err) {
                    console.log(err);
                    res.end(err);
                }
                console.log("Delete id: " + userId);
            });
            res.redirect('/users/list');
        }
    });
}
exports.processDeletePage = processDeletePage;
module.exports.displayLoginPage = (req, res, next) => {
    res.render('login', { title: 'Login' });
};
//# sourceMappingURL=user.js.map