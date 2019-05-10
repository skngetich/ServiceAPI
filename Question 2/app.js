var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/safaricomHackathon', { useNewUrlParser: true, useCreateIndex: true });
mongoose.connection.on('error', error => console.log(error));
mongoose.connection.on('open', () => console.log("DB COnnected"));
mongoose.Promise = global.Promise;

require('./auth/auth');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
const passport = require('passport');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/api', passport.authenticate('jwt', { session: false }),apiRouter);

app.listen(4000,()=>{console.log('lIstening at port 4000')})
