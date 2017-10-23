var express = require('express');
var winston = require('winston');
var expressWinston = require('express-winston');
var bodyParser = require('body-parser');
var quoteModel = require('./Models/quotesModel');
var authorModel = require('./Models/authorModel');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//This middleware shows us all the requests we are recieving
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      colorize: true
    })
  ],
  meta: false,
  msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
  colorStatus: true
}));

app.get('/', function(req, res, next) {
	console.log("I'm up and running!");
    next();
});

quoteModel.createTable(function(err) {
    if (err) throw err;
});

authorModel.createTable(function(err) {
    if (err) throw err;
});

//Routes
app.use('/quote', require('./routes/quotes'));

app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
