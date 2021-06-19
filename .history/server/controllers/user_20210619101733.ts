import { Request, Response, NextFunction } from 'express';
import express from 'express';

const router = express.Router();
let mongoose = require('mongoose');

// Create a reference to the model
let User = require('../models/user');


// Display Functions 

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

module.exports.processAddPage = (req:Request,res:Response,next:NextFunction) => {
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


module.exports.displayEditPage = (req:Request,res:Response,next:NextFunction) => {
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

module.exports.processEditPage = (req:Request,res:Response,next:NextFunction) => {
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

module.exports.deletePage = (req:Request,res:Response,next:NextFunction) => {
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

