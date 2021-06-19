import express from 'express';
const router = express.Router();
export default router;

import {  } from '../Controllers/clothing'

//let userController = require('../controllers/user');

/* Get Route for the User List page - READ Operation */
router.get('/list', displayUserList)
router.get('/', displayUserList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', userController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', processAddPage);

/* GET Route for displaying the Add page - UPDATE Operation */
router.get('/edit/:id', displayEditPage);

/* POST Route for processing the Add page - UPDATE Operation */
router.post('/edit/:id', userController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', deletePage);

