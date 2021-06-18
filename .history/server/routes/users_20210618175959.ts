import { Request, Response, NextFunction } from 'express';
import User from '../models/user';
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to our User Model
let User = require('../models/user');

/* Get Route for the User List page - READ Operation */
router.get('/', (req:Request,res:Response,next:NextFunction) => {
            res.redirect('/users/list');
        });

router.get('/list', (req:Request,res:Response,next:NextFunction) => {
    User.find((err:Error, usersList:Record<string,any>) => {
        if (err) 
        {
            return console.error(err);
        }
        else
        {
            //console.log(UserList);
            /* GET contacts page. */
            res.render('users/list', { title: 'Business Contact List', UsersList: usersList });
        }
    });
});

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/users/add', (req:Request,res:Response,next:NextFunction) => {
    res.render('users/add', { title: 'Add New Contact'});
});

/* POST Route for processing the Add page - CREATE Operation */
router.post('/users/add', (req:Request,res:Response,next:NextFunction) => {
    let newUser = User({
        "user": req.body.user,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "password": req.body.password,
    });

    User.crate(newUser, (err: Error, User: User) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            // refresh the contact list
            res.redirect('/users/list')
        }
    });
});

/* GET Route for displaying the Add page - UPDATE Operation */
router.get('/users/edit/:id', (req:Request,res:Response,next:NextFunction) => {
    let id = req.params.id;

    User.findBtId(id, (err:Error, userToEdit: User) => {
        if (err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('/users/edit', {title: 'Edit Contact', user: userToEdit})
        }

    });
});

/* POST Route for processing the Add page - UPDATE Operation */
router.post('/users/edit/:id', (req:Request,res:Response,next:NextFunction) => {
    let id = req.params.id;

    let updateUser = User ({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    });

    User.updateOne({id: id}, updateUser, (err: Error) => {
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
router.get('/users/delete/:id', (req:Request,res:Response,next:NextFunction) => {
    let id = req.params.id;

    User.remove({_id: id}, (err:Error) => {
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
