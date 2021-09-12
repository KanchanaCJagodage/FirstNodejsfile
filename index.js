var http = require('http');
const { listenerCount } = require('process');

http.createServer(function(res,req){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
});

listen(3000);