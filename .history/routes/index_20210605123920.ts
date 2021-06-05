/* index.ts : Viktoriia Romaniuk : 301079072 : 2021-06-03 */

import express from 'express';
const router = express.Router();
export default router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  let content;
  fs.readFile("/Content/about.txt","utf8" ,function(err: , content : string){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
    });
  res.render('home', { title: 'Home', content: content });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

//module.exports = router;
