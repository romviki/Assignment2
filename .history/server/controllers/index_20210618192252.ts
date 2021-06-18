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
    res.render('index', {title: 'Projects'});
}

module.exports.displayServicesPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('index', {title: 'Services'});
}

module.exports.displayContactPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('index', {title: 'Contact'});
}

module.exports.displayLoginPage = (req: Request,res: Response,next: NextFunction) => {
    res.render('index', {title: 'Login'});
}