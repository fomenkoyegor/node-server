import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
const cors = require('cors');

import indexRouter from './routes/index';
import testRouter from './routes/test';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/api/test', testRouter);


export default app;
