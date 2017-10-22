var quotesRouter = require('express').Router();
var db = require('../dbConnection.js');

quotesRouter.get('/', function (req, res) {
  console.log('GET ALL QUOTES');
  db.getAllQuotes(function(err, results) {
    if (err) throw err;
    return res.send({ error: false, data: results, message: 'Quotes list' });
  });
});

quotesRouter.post('/', function(req, res) {
  console.log('CREATE QUOTE');
  var quote = {
    author: req.body.author,
    body: req.body.body
  }
  db.createQuote(quote, function(err, results) {
    if (err) throw err;
    return res.send({ error: false, data: results, message: 'Quote inserted' });
  });
})

module.exports = quotesRouter;
