"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
const router = express.Router();
let User = require('../models/user');
router.get('/', (req, res, next) => {
    User.find((err, UserList) => {
        if (err) {
            return console.error(err);
        }
        else {
            console.log("User list: " + UserList);
        }
    });
});
module.exports = router;
//# sourceMappingURL=user.js.map