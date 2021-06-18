"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../models/user');
router.get('/', (req, res, next) => {
    User.find((err, UserList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('users', { title: 'Business Contact List', UsersList: UserList });
        }
    });
});
;
module.exports = router;
//# sourceMappingURL=user.js.map