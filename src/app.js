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


import indexRouter from './routes/index';
import testRouter from './routes/test';
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

app.use(passport.initialize());
require('./middleware/passport')(passport);


app.use(express.static(path.join(__dirname, '../react-client')));
app.get('/react',  (req, res) => res.sendFile(path.resolve(__dirname,'../react-client/build/','index.html')));

app.use('/', indexRouter);
app.use('/api/test', testRouter);
app.use('/api/auth', authRouter);
// http://localhost:3000/api/auth/login | /register ({email:"re@re.re",password:"rerere"})



export default app;
