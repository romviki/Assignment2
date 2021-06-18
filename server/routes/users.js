"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
router.get('/', (req, res, next) => {
    res.redirect('/users/list');
});
router.get('/list', (req, res, next) => {
    user_1.default.find((err, usersList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('users/list', { title: 'Business Contact List', UsersList: usersList });
        }
    });
});
router.get('/add', (req, res, next) => {
    res.render('users/add', { title: 'Add New Contact' });
});
router.post('/add', (req, res, next) => {
    let newUser = user_1.default({
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
});
router.get('/edit/:id', (req, res, next) => {
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
});
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;
    let updateUser = user_1.default({
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
});
router.get('/delete/:id', (req, res, next) => {
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
});
module.exports = router;
//# sourceMappingURL=users.js.map