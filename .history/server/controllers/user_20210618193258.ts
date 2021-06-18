import { Request, Response, NextFunction } from 'express';

import express from 'express';
const router = express.Router();
let mongoose = require('mongoose');

// Create a reference to the model
let User = require('../models/user');



module.exports.displayUserList = (req: Request,res: Response,next: NextFunction) => {
    User.find((err, UserList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('users/list', { title: 'Business Contact List', UsersList: UserList });
        }
    });
}

module.exports.displayAboutPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('about', {title: 'About'});
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