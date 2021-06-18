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

/* GET Route for displaying the Add page - CREATE Operation */

/* POST Route for displaying the Add page - CREATE Operation */

/* GET Route for displaying the Add page - CREATE Operation */

/* POST Route for displaying the Add page - CREATE Operation */


module.exports = router;
