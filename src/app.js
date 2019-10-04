import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const cors = require('cors');
const key = 'jwt-token';
const passport = require('passport');


const mongoose = require('mongoose');
const mongoURL = 'mongodb://re:zcnht,2015@ds034198.mlab.com:34198/portfolio-zeit';
const mongoDB = mongoose.connect(
    mongoURL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }
);
mongoDB.then(() => {
    console.log('connected mongoDB');
}).catch((err) => {
    console.log('err', err);
});





const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

app.use(passport.initialize());
require('./middleware/passport')(passport);

import {authRoute, homeRoute, postsRoute, testRoute} from './routes';
app.use('/', homeRoute);
app.use('/api/test', testRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postsRoute);


export default app;
