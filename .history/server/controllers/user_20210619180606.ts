import { Request, Response, NextFunction } from 'express';
import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import passport from 'passport';

// Create a reference to the model
import User from '../models/user';
import Contact from '../models/contact';


// Display Functions 

export function displayUserList (req: Request,res: Response,next: NextFunction): void {
    Contact.find((err:Error, contactList:Record<string,any>) => {
        if (err) 
        {
            return console.error(err);
        }
        else
        {
            //console.log(UserList);
            /* GET contacts page. */
            res.render('users/list', { title: 'Business Contact List', ContactList: contactList });
        }
    });
}

export function displayAddPage (req:Request,res:Response,next:NextFunction): void {
    res.render('users/add', { title: 'Add New Contact'});
}

export function processAddPage (req:Request,res:Response,next:NextFunction): void {
    let newUser = new User({
        "username": req.body.username,
        "password": req.body.password
    });

    let newContact = new Contact({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "contactEmail": req.body.contactEmail,
    });

    User.register(newUser, req.body.password, (err:any) => 
    {
        if (err)
        {
            console.error('Error: Inserting New User');
            console.error(err);
            if (err.name == 'UserExistsError') 
            {
                console.error('Error: User Already Exists');
            }
            //req.flash('registerMessage', 'Registration Error');

            return res.redirect('/users/list');
        }
    });

    Contact.create(newContact, (err: Error, Contact : any) => {
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

    let updateUser = new User ({
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

