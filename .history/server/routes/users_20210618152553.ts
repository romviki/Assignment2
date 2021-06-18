import { Request, Response, NextFunction, body } from 'express';
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to our User Model
let User = require('../models/user');

/* Get Route for the User List page - READ Operation */
router.get('/', (req:Request,res:Response,next:NextFunction) => {
    User.find((err:ErrorEvent, usersList:Record<string,any>) => {
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
router.get('/add', (req:Request,res:Response,next:NextFunction) => {
    res.render('users/add', { title: 'Add new contact'});
});

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', (req:Request,res:Response,next:NextFunction) => {
    let newUser = User({
        "user": req.body.user,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "password": req.body.password,
    });

    User.crate(newUser, (err, User) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            // refresh the user list
            res.end(err);
        }
    });
});


/* GET Route for displaying the Add page - UPDATE Operation */
router.get('/edit/:id', (req:Request,res:Response,next:NextFunction) => {

});

/* POST Route for processing the Add page - UPDATE Operation */
router.post('/edit/:id', (req:Request,res:Response,next:NextFunction) => {

});

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', (req:Request,res:Response,next:NextFunction) => {

});

module.exports = router;
