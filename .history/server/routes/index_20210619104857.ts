/* index.ts : Viktoriia Romaniuk : 301079072 : 2021-06-03 */

import express from 'express';
const router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', displayHomePage);

/* GET home page. */
router.get('/home', displayHomePage);

/* GET about page. */
router.get('/about', displayAboutPage);

/* GET projects page. */
router.get('/projects', displayProjectsPage);

/* GET services page. */
router.get('/services', displayServicesPage);

/* GET contact page. */
router.get('/contact', .displayContactPage);

/* GET login page. */
router.get('/login', displayLoginPage);

/*
router.post('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
*/




//module.exports = router;