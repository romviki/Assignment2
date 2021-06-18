"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let indexController = require('../controllers/index');
router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);
router.get('/about', indexController.displayAboutPage);
router.get('/projects', indexController.displayProjectsPage);
router.get('/services', indexController.displayServicesPage);
router.get('/contact', indexController.displayContactPage);
router.get('/login', indexController.displayLoginPage);
router.post('/home', function (req, res, next) {
    res.render('home', { title: 'Home' });
});
module.exports = router;
//# sourceMappingURL=index.js.map