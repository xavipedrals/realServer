var mysql = require('mysql');
var mysqlConfig = require('./mysqlConfig.js');

var pool = mysql.createPool(mysqlConfig);

var queries = {}
queries.getAllQuotes = function(callback) {
  var sql = "SELECT * FROM quotes";

  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback(true); return; }

    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback(true); return; }
      callback(false, results);
    });
  });
}

queries.createQuote = function(quote, callback) {
  // var quote = { author: author, body: body };
  console.log(quote);
    pool.getConnection(function(err, connection) {
      if(err) { console.log(err); callback(true); return; }

  var queryStr = "INSERT INTO quotes SET ?"
  connection.query(queryStr, quote, function(err, results, fields) {
    connection.release();
    if (err) { console.log(err); callback(true); return; }
    callback(false, results);
  });
});
};

module.exports = queries;
