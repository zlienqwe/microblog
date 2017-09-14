var db = require('../db');

function Comment(comment) {
  this.nickname = comment.nickname;
  this.content = comment.content;
  this.poster_id = comment.poster_id;
};

module.exports = Comment;

Comment.prototype.save = function save(callback) {

}

Comment.getByPosterId = function get(poster_id, callback) {
  var sql = "SELECT * FROM comment where poster_id = '"+ poster_id + "'";
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });
};

Comment.addCommentForCurrentPoster = function save(comment, callback) {
  console.log(comment)
  console.log('asdasdasdasdadasdasdasda')

  var sql = "INSERT INTO comment (nickname, content, poster_id) VALUES('"+ comment.nickname +"','"+ comment.content +"','"+  comment.poster_id +"');"
  db.query(sql, function (err, result, fields) {
    if (err) throw err;
    callback(result)
  });

}

