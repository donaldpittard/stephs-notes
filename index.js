var express = require("express");
var alexa = require("alexa-app");
var COLORS = {
  blue: 'blue',
  yellow: 'yellow',
  red: 'red',
  cyan: 'cyan',
  green: 'green',
  orange: 'orange',
  pink: 'pink'
};
var PORT = process.env.PORT || 8080;
var app = express();

// ALWAYS setup the alexa app and attach it to express before anything else.
var alexaApp = new alexa.app("ask-alexa");

alexaApp.express({
  expressApp: app,
  //router: express.Router(),

  // verifies requests come from amazon alexa. Must be enabled for production.
  // You can disable this if you're running a dev environment and want to POST
  // things to test behavior. enabled by default.
  checkCert: false,

  // sets up a GET route when set to true. This is handy for testing in
  // development, but not recommended for production. disabled by default
  debug: true
});

// now POST calls to /test in express will be handled by the app.request() function

// from here on you can setup any other express routes or middlewares as normal
app.set("view engine", "ejs");

app.get('/', function(req, res) {
  var notes = [];
  notes = [
    {color: COLORS.pink, text: 'HELLO STICKY NOTE WORLD!'},
    {color: COLORS.blue, text: 'Welcome to Steph\'s notes'},
    {color: COLORS.red, text: 'Testing out the stickies'},
    {color: COLORS.cyan, text: 'Test this notes application'},
    {color: COLORS.orange, text: 'Try this out with Alexa'},
    {color: COLORS.green, text: 'Heroku is pretty nifty'},
    {color: COLORS.yellow, text: 'Learn express js'}
  ];

  res.render('pages/index', {notes: notes});
});

app.use(express.static(__dirname + '/'));

alexaApp.launch(function(request, response) {
  response.say("You launched the app!");
});

alexaApp.intent("StephsNotesControlIntent", {
    "slots": { 
      "color": "STEPHS_NOTES_COLOR", 
      "noteText": "AMAZON.Literal" 
    },
    "utterances": []
  },
  function(request, response) {
    response.say("Success!");
  }
);

app.listen(PORT, () => console.log("Listening on port " + PORT + "."));