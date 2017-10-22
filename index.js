var http = require('http');
var express = require('express');
var winston = require('winston');
var expressWinston = require('express-winston');
var mysql = require('mysql');
var mysqlConfig = require('./mysqlConfig.js');
const bodyParser = require('body-parser');
var db = require('./dbConnection.js');

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

// function createTable() {
//   var createQuoteTable = "CREATE TABLE IF NOT EXISTS quotes(id int PRIMARY KEY auto_increment,author VARCHAR(255)NOT NULL,body varchar(255)not null)";
//   connection.query(createQuoteTable, function(err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });
// }
//

app.use('/quotes', require('./routes/quotes'));

app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
