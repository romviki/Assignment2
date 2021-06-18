let express = require('express');
const router = express.Router();

// Connect to our User Model
let User = require('../models/users');

/* Get Route for the User List page - READ Operation */
router.get('/', (req,res,next) => {
    User.find(err, UserList) => {
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