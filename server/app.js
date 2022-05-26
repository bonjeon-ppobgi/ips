/* 기본 변수들 */
const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());

// /* DB 연결부 */
mongoose.connect(config.mongoURI, {})
    .then(() => console.log('<keyword> DB Connected...'))
    .catch(err => console.log(err))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* 라우터 연결부 */
const indexRouter = require('./routes/index');
const mainRouter = require('./routes/main');
const mindRouter = require('./routes/mind');
const resultRouter = require('./routes/result');

app.use('/api', indexRouter);
app.use('/api/main', mainRouter);
app.use('/api/mind', mindRouter);
app.use('/api/result', resultRouter);

/* html request 테스트용으로 추가한 코드 */
app.get('/main', (req, res)=>{ 
  res.sendFile(__dirname +'/input.html')
});

/////////////////////////////////////////////////////

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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