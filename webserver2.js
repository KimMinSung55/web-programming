const http = require('http');
const fs = require('fs');
const port = 1000;

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });//키값이 Content-Type이고 밸류값이 text/plain인 헤더를 추가, 패킷
    filename = "./1.html";
    fs.readFile(filename, (err, data) => {
        if (err == null) {
            res.write(data);
            res.end();
        }
        else {
            res.write("File not found!");
            res.end();
        }

    });
});

server.listen(port);