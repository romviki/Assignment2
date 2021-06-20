import express from 'express';
const router = express.Router();
export default router;

import { displayUserList, displayAddPage, displayEditPage, processEditPage, processDeletePage, processAddPage  } from '../controllers/user';

// import Utils
import { UserName,AuthGuard } from '../Utils';

/* Get Route for the User List page - READ Operation */
router.get('/list', displayUserList)
router.get('/', displayUserList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', AuthGuard, displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', AuthGuard, processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', AuthGuard, displayEditPage);

/* POST Route for processing the Add page - UPDATE Operation */
router.post('/edit/:id', AuthGuard, processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', AuthGuard, processDeletePage);


