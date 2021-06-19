import { Request, Response, NextFunction } from 'express';

import express from 'express';
const router = express.Router();
let mongoose = require('mongoose');

// Create a reference to the model
let User = require('../models/user');



module.exports.displayUserList = (req: Request,res: Response,next: NextFunction) => {
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
}

module.exports.displayAddPage = (req:Request,res:Response,next:NextFunction) => {
    res.render('users/add', { title: 'Add New Contact'});
}

module.exports.displayProcessPage = (req:Request,res:Response,next:NextFunction) => {
    let newUser = User({
        "user": req.body.user,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "password": req.body.password,
    });

    User.create(newUser, (err: Error, User : AnyARecord) => {
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
}




module.exports.displayProjectsPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('projects', {title: 'Projects'});
}

module.exports.displayServicesPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('services', {title: 'Services'});
}

module.exports.displayContactPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('contact', {title: 'Contact'});
}

module.exports.displayLoginPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('login', {title: 'Login'});
}