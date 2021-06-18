let express = require('express');
let router = express.Router();

// Connect to our User Model
let User = require('../models');

/* Get Route for the User List page - READ Operation */
router.get('/', (req,res,next) => {
    User.find(err, UserList) => {
        if (err: ErrorEvent) 
        {
            return console.error(err);
        }
        else
        {
            console.log(UserList);
        }
    });
});