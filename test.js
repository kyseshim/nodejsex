var http = require('http');
http.createServer(function(request,response) {
	response.writeHead(200, {
	'Content-type' : 'text/plain'
	});
	response.end('Hello world ssiballlllllll jotgata!!!! mother! save me please!');
}).listen(3000);

console.log('Server is running at http://localhost:3000');