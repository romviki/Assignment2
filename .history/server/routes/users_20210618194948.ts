import { AnyARecord } from 'dns';
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
router.post('/add',userController.di);

/* GET Route for displaying the Add page - UPDATE Operation */
router.get('/edit/:id', (req:Request,res:Response,next:NextFunction) => {
    let id = req.params.id;

    User.findById(id, (err:Error, userToEdit: AnyARecord) => {
        if (err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('users/edit', {title: 'Edit Contact', user: userToEdit})
        }

    });
});

/* POST Route for processing the Add page - UPDATE Operation */
router.post('/edit/:id', (req:Request,res:Response,next:NextFunction) => {
    let id = req.params.id;

    let updateUser = User ({
        "_id": id,
        "user": req.body.user,
        "name": req.body.name,
        "phone": req.body.phone,    
        "email": req.body.email,
        "password": req.body.password
    });

    User.updateOne({"_id": id}, updateUser, (err: Error) => {
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
