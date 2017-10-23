var db = require('../dbConnection');
var QuoteModel = {
    getAllQuotes: function(callback) {
        return db.query("SELECT * FROM quotes", callback);
    },
    getTaskById: function(id, callback) {
        return db.query("select * from task where Id=?", [id], callback);
    },
    addQuote: function(Quote, callback) {
      console.log(Quote);
        return db.query("INSERT INTO quotes VALUES(?,?, ?)", [null, Quote.author, Quote.body], callback);
    },
    deleteTask: function(id, callback) {
        return db.query("delete from task where Id=?", [id], callback);
    },
    updateTask: function(id, Task, callback) {
        return db.query("update task set Title=?,Status=? where Id=?", [Task.Title, Task.Status, id], callback);
    }
};
module.exports = QuoteModel;
