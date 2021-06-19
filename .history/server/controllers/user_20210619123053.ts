import { Request, Response, NextFunction } from 'express';
import express from 'express';
const router = express.Router();
let mongoose = require('mongoose');

// Create a reference to the model
let User = require('../models/user');


// Display Functions 

export function displayUserList (req: Request,res: Response,next: NextFunction): void {
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

export function displayAddPage (req:Request,res:Response,next:NextFunction): void {
    res.render('users/add', { title: 'Add New Contact'});
}

export function processAddPage (req:Request,res:Response,next:NextFunction): void {
    let newUser = User({
        "user": req.body.user,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "password": req.body.password,
    });

    User.create(newUser, (err: Error, User : any) => {
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


export function displayEditPage (req:Request,res:Response,next:NextFunction): void {
    let id = req.params.id;

    User.findById(id, (err:Error, userToEdit: any) => {
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
}

export function processEditPage (req:Request,res:Response,next:NextFunction): void {
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
}

export function processDeletePage (req:Request,res:Response,next:NextFunction): void {
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
}

module.exports.displayLoginPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('login', {title: 'Login'});
}

