import { Request, Response, NextFunction } from 'express';
import passport from 'passport';



/* Get home page */ 
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
    if (!req.user)
    {
        res.render('login', {title: 'Login', page: 'login', messages: req.flash('loginMessage') });
    }  
}

module.exports.processLoginPage = (req: Request,res: Response,next: NextFunction) => {
  
}

module.exports.processLogoutPage = (req: Request,res: Response,next: NextFunction) => {
 
}