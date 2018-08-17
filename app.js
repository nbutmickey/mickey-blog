let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let index = require('./server/routes/index');
let article=require('./server/routes/article');
let tag=require('./server/routes/tags');
let message=require('./server/routes/message');


let auth=require('./server/routes/admin/auth');
let articles=require('./server/routes/admin/article');
let tags=require('./server/routes/admin/tags');
let qiniu=require('./server/routes/admin/qiniu');
let messages=require('./server/routes/admin/message');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './dist')));

app.use('/admin',auth);
app.use('/admin',articles);
app.use('/admin',tags);
app.use('/admin',qiniu);
app.use('/admin',messages);

app.use('/', index);
app.use('/',article);
app.use('/',tag);
app.use('/',message);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
