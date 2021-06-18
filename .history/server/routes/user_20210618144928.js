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
            res.render('users/list', { title: 'Business Contact List', UsersList: UserList });
        }
    });
});
;

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', (req,res, next) => {

});

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', (req,res, next) => {

});
/* GET Route for displaying the Add page - UPDATE Operation */
router.get('/edit/:id', (req,res, next) => {

});

/* POST Route for processing the Add page - UPDATE Operation */
router.post('/edit/:id', (req,res, next) => {

});

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', (req,res, next) => {

});

module.exports = router;
