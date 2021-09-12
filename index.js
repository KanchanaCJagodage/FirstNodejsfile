var http = require('http');


http.createServer(function(res,req){
    res.write('Hello World');
    res.end();
});

listen(3000);