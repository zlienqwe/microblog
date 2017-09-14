var db = require('../db');

function User(user) {
  this.username = user.username;
  this.password = user.password;
};

module.exports = User;

User.prototype.save = function save(callback) {
  
}

User.get = function get(callback) {
  var sql = "SELECT username, id FROM user"
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
}

User.getByName = function get(username, callback) {
  var sql = "SELECT * FROM user where username = '"+ username + "' limit 1"
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
}
User.getById = function get(user_id, callback) {
  var sql = "SELECT * FROM user where id = '"+ user_id + "' limit 1"
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
}

User.save = function get(user, callback) {
  var sql = "INSERT INTO user (username, password) VALUES('"+ user.username +"','"+ user.password +"');"
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
};