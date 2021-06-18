"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../models/user');
let userController = require('../controllers/user');
router.get('/list', userController.displayUserList);
router.get('/', userController.displayUserList);
router.get('/add', userController.displayAddPage);
router.post('/add', userController.processAddPage);
router.get('/edit/:id', userController.displayEditPage);
router.post('/edit/:id', userController.processEditPage);
router.get('/delete/:id', userController.deletePage);
router.get('/login', userController.displayLoginPage);
module.exports = router;
//# sourceMappingURL=users.js.map