import { Request, Response, NextFunction } from 'express';
import { networkInterfaces } from 'os';
import passport from 'passport';
// create an instance of the User model
import User from '../Models/user';

/* Get home page */ 
export function displayHomePage (req: Request,res: Response,next: NextFunction): void {
    res.render('home', {title: 'Home'});
}

export function displayAboutPage (req: Request,res: Response,next: NextFunction): void {
    res.render('about', {title: 'About'});
}

export function displayProjectsPage (req: Request,res: Response,next: NextFunction): void {
    res.render('projects', {title: 'Projects'});
}

export function displayServicesPage (req: Request,res: Response,next: NextFunction): void {
    res.render('services', {title: 'Services'});
}

export function displayContactPage (req: Request,res: Response,next: NextFunction): void {
    res.render('contact', {title: 'Contact'});
}

export function displayLoginPage (req: Request,res: Response,next: NextFunction): void {
    if (!req.user)
    {
        return res.render('login', {title: 'Login', page: 'login', messages: req.flash('loginMessage') });
    }  
    return res.redirect('/users/list');
}

export function processLoginPage (req: Request,res: Response,next: NextFunction): void
{
    passport.authenticate('local',(err,user,info) => {
        // are there server error?
        if (err) 
        {
            console.log(err);
            return next(err);
        }

        // are there login errors?
        if(!user) 
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirest('/users/list');
        }

        req.login(user, (err) =>
        {
            if (err)
            {
                console.log(err);
                return next(err);
            }
               return res.redirect('/users/list');
        });
    });
}

export function processLogoutPage (req: Request,res: Response,next: NextFunction): void 
{
    req.logout();
    res.redirect('/login');    
}