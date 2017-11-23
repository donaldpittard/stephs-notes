const express = require('express')
const router = express.Router()
const Alexa = require('alexa-sdk')

const handlers = {
    'StephsNotesControlIntent': (color, text) => this.emit('SayHello'),
    'LaunchRequest': () => this.emit('SayHello'),
    'HelloWorldIntent': () => this.emit('SayHello'),
    'SayHello': () => {
        this.response.speak('Hello World')
        this.emit(':responseReady')
    },
    'AMAZON.HelpIntent': () => {
        const speechOutput = 'This is the say Hello World sample skill'
        const reprompt = 'Say Hello to hear me speak'

        this.response.speak(speechOutput).listen(reprompt)
        this.emit(':responseReady')
    },
    'AMAZON.CancelIntent': () => {
        this.response.speak('Goodbye')
        this.emit(':resonseReady')
    },
    'AMAZON.StopIntent': () => {
        this.response.speak('See you later')
        this.emit(':responseReady')
    }
}

router.post('/', function(req, res) {
    exports.handler = function (event, context, callback) {
        let alexa = Alexa.handler(event, context, callback)
        alexa.registerHandlers(handlers)
        alexa.execute()
    }

    console.log(req);
    console.log(res);
    res.send(alexa);
})

module.exports = router
/*
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var alexa = require('./routes/alexa.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/alexa', alexa)

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
*/