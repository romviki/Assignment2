import { Request, Response, NextFunction } from 'express';

import express from 'express';
const router = express.Router();

module.exports.dispalyHomePage = (req: Request,res: Response,next: NextFunction) => {
    res.render('index', {title: 'Home'});
}