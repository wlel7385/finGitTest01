var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',    // 호스트 주소
  user     : 'root',           // mysql user
  password : 'Wlemforhs1!',       // mysql password
  database : 'cherry',         // mysql 데이터베이
});
connection.connect();
var sql = 'SELECT * FROM cherry.user'
connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  console.log('user list :');
  console.log(results);
});
connection.end();