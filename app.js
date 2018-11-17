var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//const sendmail = require('sendmail')();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');
var projectsRouter = require('./routes/projects');
var educationRouter = require('./routes/education');
var homeRouter = require('./routes/index');
var militaryRouter = require('./routes/military');
var resumeRouter = require('./routes/resume');
var umdaliveRouter = require('./routes/umdalive');
var problemSolverRouter = require('./routes/problemSolver');

//Email stuff to learn!!!!
//https://forum.freecodecamp.org/t/is-nodemailer-secure/35135/2
//https://www.w3schools.com/nodejs/nodejs_email.asp


var app = express();
//var nodemailer = require('nodemailer');

app.set("port",80);

// view engine setup
app.engine('ejs',require('express-ejs-extend'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact',contactRouter);
app.use('/projects',projectsRouter);
app.use('/education',educationRouter);
app.use('/home',homeRouter);
app.use('/military',militaryRouter);
app.use('/resume',resumeRouter);
app.use('/problemSolver',problemSolverRouter);
app.use('/umdAlive',umdaliveRouter);

app.use('/awards',express.static(__dirname + '/awards'));

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

app.listen(app.get("port"),function(){
	console.log('myWebApp listening on port: ', app.get("port"));

});
