import { Request, Response, NextFunction } from 'express';

import express from 'express';
const router = express.Router();

module.exports.displayHomePage = (req: Request,res: Response,next: NextFunction) => {
    res.render('home', {title: 'Home'});
}

module.exports.displayAboutPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('about', {title: 'About'});
}

module.exports.displayProjectsPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('projects', {title: 'Projects'});
}

module.exports.displayServicesPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('services', {title: 'Services'});
}

module.exports.displayContactPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('contact', {title: 'Contact'});
}

module.exports.displayLoginPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('login', {title: 'Login'});
}