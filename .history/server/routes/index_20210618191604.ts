/* index.ts : Viktoriia Romaniuk : 301079072 : 2021-06-03 */

import express from 'express';
const router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home',indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET login page. */
router.get('/login', indexController.displayLoginPage);

router.post('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

module.exports = router;
