var mysql = require('mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'quotedb'
  // connectionLimit: 10,
  // supportBigNumbers: true
});

module.exports = pool;
