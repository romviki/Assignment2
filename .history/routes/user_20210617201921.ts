let express = require('express');
const router = express.Router();

// Connect to our User Model
let User = require('../models/user');

/* Get Route for the User List page - READ Operation */
router.get('/', function (req,res,next) => {
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

function err(err: any, UserList: any) {
    throw new Error("Function not implemented.");
}
