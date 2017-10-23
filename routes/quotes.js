var quotesRouter = require('express').Router();
var QuoteModel = require('../Models/quotesModel');

quotesRouter.get('/', function (req, res) {
      QuoteModel.getAllQuotes(function(err, results) {
          if (err) throw err;
          return res.send({ error: false, data: results, message: 'Quotes list' });
      });
});

quotesRouter.post('/', function(req, res) {
  if (req.body.text) {
    console.log("SEARCH");
    console.log(req.body.text);
      QuoteModel.searchQuote(req.body.text, function(err, results) {
          if (err) throw err;
          return res.send({ error: false, data: results, message: 'Quotes list' });
      });
  }
  else {
      var quote = {
          author: req.body.author,
          body: req.body.body,
          author_photo: null
      };
      QuoteModel.addQuote(quote, function(err, results) {
          if (err) throw err;
          return res.send({ error: false, data: results, message: 'Quote inserted' });
      });
  }
});


module.exports = quotesRouter;
