var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session')
var session = require('express-session')

var index = require('./routes/index');
var login = require('./routes/login');
var reg = require('./routes/register');
var users = require('./routes/users');
var post = require('./routes/post');
var comment = require('./routes/comment');
var logout = require('./routes/logout');
var authors = require('./routes/authors');



var app = express()
  , cors = require('cors');
app.use(cors());

app.set('title', 'My Site');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  cookieName: 'session',
  secret: 'XfYbnFRTtWsresnVkqNUXdtm&aDhY9U(PuBG.UCqEeKqyTt3YsxDbxoH2fB7Atqh',
  httpOnly: true,
  ephemeral: true,
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}));



app.use(function (req, res, next) {
  console.log('Time: %d', Date.now());
  next();
})

app.use('/', index);
app.use('/login', login);
app.use('/reg', reg);
app.use('/u', users);
app.use('/post', post);
app.use('/comment', comment);
app.use('/logout', logout);
app.use('/authors', authors);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
