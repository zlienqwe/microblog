var db = require('../db');

function Poster(poster) {
  this.title = poster.title;
  this.content = poster.content;
  this.user_id = poster.user_id;
};

module.exports = Poster;

Poster.prototype.save = function save(callback) {

}

Poster.get = function get(user_id, callback) {
  var sql = "SELECT * FROM poster where user_id = '"+ user_id + "'";
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
}

Poster.getAll = function get(callback) {
  var sql = "SELECT * FROM poster";
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
}
Poster.getCurrent = function get(id, callback) {
  var sql = "SELECT * FROM poster where id = '"+ id + "' limit 1";
  console.log(sql)
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
}

Poster.save = function get(poster, callback) {
  var sql = "INSERT INTO poster (title, content, user_id) VALUES('"+ poster.title +"','"+ poster.content +"','"+  poster.user_id +"');"
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
};

Poster.deleteCurrent = function get(id, callback) {
  var sql = "DELETE FROM poster where id = '"+ id + "'";
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
};

Poster.editThisPoster = function get(poster, callback) {
  var sql = "UPDATE poster SET title='"+ poster.title +"', content='"+ poster.content +"'  WHERE id='" + poster.id + "'"
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
}