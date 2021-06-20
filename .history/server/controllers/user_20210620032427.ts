/* index.ts : Viktoriia Romaniuk : 301079072 : 2021-06-17 */

import { Request, Response, NextFunction } from 'express';
import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import passport from 'passport';

// Create a reference to the model
import User from '../models/user';
import Contact from '../models/contact';

// import Utils
import { UserName,AuthGuard } from '../Utils';


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
            res.render('users/list', { title: 'Business Contact List', ContactList: contactList, userName: UserName(req) });
        }
    });
}

export function displayAddPage (req:Request,res:Response,next:NextFunction): void {
    res.render('users/add', { title: 'Add New Contact', userName: UserName(req)});
}

export function processAddPage (req:Request,res:Response,next:NextFunction): void {
    let newUser = new User({
        "username": req.body.username,
        "password": req.body.password
    });

    let userId = newUser._id;
    console.log("NewUser Id: " + userId);

    let newContact = new Contact({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "contactEmail": req.body.contactEmail,
        "userId": userId,
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

    Contact.findById(id, (err:Error, contact: any) => {
        if (err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('users/edit', {title: 'Edit Contact', contactToEdit: contact, userName: UserName(req) })
        }
    });
}

export function processEditPage (req:Request,res:Response,next:NextFunction): void {
    let id = req.params.id;

    let updateContact = new Contact ({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,    
        "contactEmail": req.body.contactEmail,
    });

    Contact.updateOne({"_id": id}, updateContact, (err: Error) => {
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
    let contactId = req.params.id;

    Contact.findById(contactId, (err:Error, userId: any) => {
        if (err) 
        {
            console.log(err);
            res.end(err);
        }

        Contact.remove({"_id": contactId}, (err:Error) => {
            if (err) 
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                User.remove({"_id": req.params.userId}, (err:Error) => {
                    if (err) 
                    {
                        console.log(err);
                        res.end(err);
                    }
                    console.log("Delete id: " + req.params.userId);
                });
                // refresh the contact list
                res.redirect('/users/list');
            }
        });
    });
}

module.exports.displayLoginPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('login', {title: 'Login', userName: UserName(req)});
}

