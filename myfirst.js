let http = require('http');
let uc = require('upper-case')
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(uc.upperCase('Hello World! this is my first node js server'));
}).listen(8000);
