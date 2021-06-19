"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processLogoutPage = exports.processLoginPage = exports.displayLoginPage = exports.displayContactPage = exports.displayServicesPage = exports.displayProjectsPage = exports.displayAboutPage = exports.displayHomePage = void 0;
function displayHomePage(req, res, next) {
    res.render('home', { title: 'Home' });
}
exports.displayHomePage = displayHomePage;
function displayAboutPage(req, res, next) {
    res.render('about', { title: 'About' });
}
exports.displayAboutPage = displayAboutPage;
function displayProjectsPage(req, res, next) {
    res.render('projects', { title: 'Projects' });
}
exports.displayProjectsPage = displayProjectsPage;
function displayServicesPage(req, res, next) {
    res.render('services', { title: 'Services' });
}
exports.displayServicesPage = displayServicesPage;
function displayContactPage(req, res, next) {
    res.render('contact', { title: 'Contact' });
}
exports.displayContactPage = displayContactPage;
function displayLoginPage(req, res, next) {
    if (!req.user) {
        res.render('login', { title: 'Login', page: 'login', messages: req.flash('loginMessage') });
    }
}
exports.displayLoginPage = displayLoginPage;
function processLoginPage(req, res, next) {
}
exports.processLoginPage = processLoginPage;
function processLogoutPage(req, res, next) {
}
exports.processLogoutPage = processLogoutPage;
//# sourceMappingURL=index.js.map