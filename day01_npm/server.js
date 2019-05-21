var http = require("http");

http.createServer(function (req, res) {
	var body = "hello Server";
	res.end("안녕하세요")
}).listen(3000);
