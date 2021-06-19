/* index.ts : Viktoriia Romaniuk : 301079072 : 2021-06-03 */

import createError from 'http-errors';
import express from 'express';
import path from 'path';
import fs from 'fs';
import http from 'http';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose, {mongo} from 'mongoose';

// modules for authentication
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';

// modules for cors
import cors from 'cors';

// authentication objects
let localStrategy = passportLocal.Strategy; //alias
import User from '../models/user';

// module for auth  messaging and error management
import flash from 'connect-flash';

// database setup
//let mongoose = require('mongoose');
let DB = require('./db');

// point mongoose to the DB URI
mongoose.connect(DB.URI);

let mongoDB = mongoose.connection;
mongoDB.on('error',console.error.bind(console,'Connection Error:'));
mongoDB.once('open', ()=> {
  console.log('Connected to MongoDB...');
})

let indexRouter = require('../routes/index');
let userRouter = require('../routes/users');

const app = express();
export default app; // exports app as the default Object for this module

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// add support for cors
app.use(cors());


app.use('/', indexRouter);
app.use('/users',userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;