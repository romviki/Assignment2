import { Request, Response, NextFunction } from 'express';
let express = require('express');
let router = express.Router();

module.exports.dispalyHomePage = (req: Request,res: Response,next: NextFunction) => {
    res.render('index', {title: 'Home'});
}