"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let mongoose = require('mongoose');
let User = require('../models/user');
module.exports.displayUserList = (req, res, next) => {
    User.find({sort: {name: 1}}, (err, usersList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('users/list', { title: 'Business Contact List', UsersList: usersList });
        }
    });
};
module.exports.displayAddPage = (req, res, next) => {
    res.render('users/add', { title: 'Add New Contact' });
};
module.exports.processAddPage = (req, res, next) => {
    let newUser = User({
        "user": req.body.user,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "password": req.body.password,
    });
    User.create(newUser, (err, User) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/users/list');
        }
    });
};
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, userToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('users/edit', { title: 'Edit Contact', user: userToEdit });
        }
    });
};
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updateUser = User({
        "_id": id,
        "user": req.body.user,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "password": req.body.password
    });
    User.updateOne({ "_id": id }, updateUser, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/users/list');
        }
    });
};
module.exports.deletePage = (req, res, next) => {
    let id = req.params.id;
    User.remove({ "_id": id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/users/list');
        }
    });
};
module.exports.displayLoginPage = (req, res, next) => {
    res.render('login', { title: 'Login' });
};
//# sourceMappingURL=user.js.map