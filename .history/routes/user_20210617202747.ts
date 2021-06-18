let express = require('express');
const router = express.Router();

// Connect to our User Model
let User = require('../models/user');

/* Get Route for the User List page - READ Operation */
router.get('/', function (req:any,res,next:any) {
    User.find((err:ErrorEvent, UserList:any) {
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
