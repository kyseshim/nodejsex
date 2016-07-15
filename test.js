var http = require('http');
http.createServer(function(req,res) {
	res.writeHead(200, {
	'Content-type' : 'text/plain'
	});
	res.end('Hello world ssiballlllllll jotgata!!!! mother!');
}).listen(3000);

console.log('Server is running at http://localhost:3000');