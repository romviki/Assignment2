"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processLogoutPage = exports.processLoginPage = exports.displayLoginPage = exports.displayContactPage = exports.displayServicesPage = exports.displayProjectsPage = exports.displayAboutPage = exports.displayHomePage = void 0;
const passport_1 = __importDefault(require("passport"));
const Utils_1 = require("../Utils");
function displayHomePage(req, res, next) {
    res.render('home', { title: 'Home', userName: Utils_1.UserName(req) });
}
exports.displayHomePage = displayHomePage;
function displayAboutPage(req, res, next) {
    res.render('about', { title: 'About', userName: Utils_1.UserName(req) });
}
exports.displayAboutPage = displayAboutPage;
function displayProjectsPage(req, res, next) {
    res.render('projects', { title: 'Projects', userName: Utils_1.UserName(req) });
}
exports.displayProjectsPage = displayProjectsPage;
function displayServicesPage(req, res, next) {
    res.render('services', { title: 'Services', userName: Utils_1.UserName(req) });
}
exports.displayServicesPage = displayServicesPage;
function displayContactPage(req, res, next) {
    res.render('contact', { title: 'Contact', userName: Utils_1.UserName(req) });
}
exports.displayContactPage = displayContactPage;
function displayLoginPage(req, res, next) {
    if (!req.user) {
        return res.render('login', { title: 'Login', page: 'login', userName: Utils_1.UserName(req), messages: req.flash('loginMessage') });
    }
    return res.redirect('/users/list');
}
exports.displayLoginPage = displayLoginPage;
function processLoginPage(req, res, next) {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        console.log("======= We are inside passport.authenticate");
        console.log("======= username: " + user);
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        console.log("======= We passed check on !username");
        req.login(user, (err) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            console.log("======= There is no db error");
            return res.redirect('/users/list');
        });
    })(req, res, next);
}
exports.processLoginPage = processLoginPage;
function processLogoutPage(req, res, next) {
    req.logout();
    res.redirect('/login');
}
exports.processLogoutPage = processLogoutPage;
//# sourceMappingURL=index.js.map