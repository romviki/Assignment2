"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processDeletePage = exports.processEditPage = exports.displayEditPage = exports.processAddPage = exports.displayAddPage = exports.displayUserList = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_1 = __importDefault(require("../models/user"));
function displayUserList(req, res, next) {
    user_1.default.find((err, usersList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('users/list', { title: 'Business Contact List', UsersList: usersList });
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
        "user": req.body.user,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "password": req.body.password,
    });
    user_1.default.create(newUser, (err, User) => {
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
    user_1.default.findById(id, (err, userToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('users/edit', { title: 'Edit Contact', user: userToEdit });
        }
    });
}
exports.displayEditPage = displayEditPage;
function processEditPage(req, res, next) {
    let id = req.params.id;
    let updateUser = new user_1.default({
        "_id": id,
        "user": req.body.user,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "password": req.body.password
    });
    user_1.default.updateOne({ "_id": id }, updateUser, (err) => {
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
    let id = req.params.id;
    user_1.default.remove({ "_id": id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/users/list');
        }
    });
}
exports.processDeletePage = processDeletePage;
module.exports.displayLoginPage = (req, res, next) => {
    res.render('login', { title: 'Login' });
};
//# sourceMappingURL=user.js.map