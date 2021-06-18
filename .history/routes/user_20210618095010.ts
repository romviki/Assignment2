import { Request, Response, NextFunction } from 'express';
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to our User Model
let User = require('../models/user');

/* Get Route for the User List page - READ Operation */
router.get('/', (req:Request,res:Response,next:NextFunction) => {
    User.find((err:ErrorEvent, UserList:Record<string,any>) => {
        if (err) 
        {
            return console.error(err);
        }
        else
        {
            //console.log(UserList);
            
        }
    });
});

module.exports = router;
