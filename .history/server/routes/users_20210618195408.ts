import { Request, Response, NextFunction } from 'express';
//import User from '../models/user';
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to our User Model
let User = require('../models/user');

let userController = require('../controllers/user');

/* Get Route for the User List page - READ Operation */
router.get('/list', userController.displayUserList)
router.get('/', userController.displayUserList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', userController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',userController.processAddPage);

/* GET Route for displaying the Add page - UPDATE Operation */
router.get('/edit/:id', userController.displayEditPage);

/* POST Route for processing the Add page - UPDATE Operation */
router.post('/edit/:id', userController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', (req:Request,res:Response,next:NextFunction) => {
    let id = req.params.id;

    User.remove({"_id": id}, (err:Error) => {
        if (err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/users/list');
        }
    });
});

module.exports = router;
