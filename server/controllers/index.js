"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
module.exports.displayHomePage = (req, res, next) => {
    res.render('home', { title: 'Home' });
};
module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About' });
};
module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects' });
};
module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services' });
};
module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact' });
};
module.exports.displayLoginPage = (req, res, next) => {
    res.render('login', { title: 'Login' });
};
//# sourceMappingURL=index.js.map