var db = require('../db');

function Comment(comment) {
  this.nickname = comment.nickname;
  this.content = comment.content;
  this.poster_id = comment.poster_id;
  this.create_time = comment.create_time;
};

module.exports = Comment;

Comment.prototype.save = function save(callback) {

}

Comment.getByPosterId = function get(poster_id, callback) {
  var sql = "SELECT * FROM comment where poster_id = '"+ poster_id + "' ORDER BY create_time DESC";
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
};

Comment.addCommentForCurrentPoster = function save(comment, callback) {
  var sql = "INSERT INTO comment (nickname, content, poster_id, create_time) VALUES('"+ comment.nickname +"','"+ comment.content +"','"+  comment.poster_id +"','"+ comment.create_time +"');";
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
}

Comment.deleteCommentByPosterId  =function save(id, callback) {
  var sql = "DELETE FROM comment WHERE poster_id='"+ id + "'";
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
}
