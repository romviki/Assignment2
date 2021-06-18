import { AnyARecord } from 'dns';
import { Request, Response, NextFunction } from 'express';
let express = require('express');
const router = express.Router();

// Connect to our User Model
let User = require('../models/user');

/* Get Route for the User List page - READ Operation */
router.get('/users', (req:Request,res:Response,next:NextFunction) => {
    User.find((err:ErrorEvent, UserList: AnyARecord) => {
        if (err) 
        {
            return console.error(err);
        }
        else
        {
            console.log(UserList);
        }
    });
});

module.exports = router;
