const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const index = require('./routes/index');
const users = require('./routes/users');
const signup = require('./routes/signup');
const signin = require('./routes/signin')
const image = require('./routes/image');
const leaderboard = require('./routes/leaderboard');

const app = express();
const cors = require('cors')
mongoose.connect("mongodb://chin-puzzle:chin-puzzle@ds235768.mlab.com:35768/the-chin-puzzle")

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/users', users);
app.use('/api/signup', signup)
app.use('/api/signin', signin)
app.use('/api/images', image);
app.use('/api/leaderboard', leaderboard);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
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
  res.send('error');
});

module.exports = app;
