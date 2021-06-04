import express from 'express';
const router = express.Router();
export default router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

//module.exports = router;
