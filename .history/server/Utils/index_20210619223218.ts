/* index.ts : Viktoriia Romaniuk : 301079072 : 2021-06-17 */

import express, { Request, Response, NextFunction } from 'express';

import * as DBConfig from '../Config/db';


export function UserName(req: Request): string
{
    if(req.user)
    {
        let user = req.user as UserDocument;
        return user.username.toString();
    }
    return '';
}

export function AuthGuard(req: Request, res: Response, next: NextFunction): void
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}