var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',    
    user     : 'root',         
    password : 'Wlemforhs1!',
    database : 'cherry',        
  });
  connection.connect();
var express = require("express"),
app = express();
var port = process.env.PORT || 5000;
app.use(express.static(__dirname + '/public'));

app.get('/main', function(req,res){
var sql = 'SELECT * FROM cherry.user'
connection.query(sql, function (error, results) {
  if (error) throw error;
    res.send(results);
});

})
