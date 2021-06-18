"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to our User model
let User = require('../models/user');

let userController = require('../controllers/user');

router.get('/', userController.displayUserList);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', (req,res, next) => {
    res.render('users/list', { title: 'Business Contact List', UsersList: UserList });
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
