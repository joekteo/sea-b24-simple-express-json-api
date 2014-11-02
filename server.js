// BASE SETUP
var express = require('express');
var moment  = require('moment');
var app     = express();
var port    = process.env.PORT || 3001;

// ROUTES
// get an instance of router
var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

// route to display local time
router.get('/time', function (req, res) {
  res.json('Local time is ' + moment().format("YYYY-MM-DD HH:mm"));
});

// route with parameters (http://localhost:3001/hello/:name)
router.get('/greet/:name', function(req, res) {
  res.json('Greetings ' + req.params.name + '!');
});

app.use('/', router);

// START SERVER
app.listen(port);