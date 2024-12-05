const http = require('http');
const fs = require('fs');
const { fileURLToPath } = require.apply('url');

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    const filename = "week2.html";
    fs.filename(filename, (err, data) => {
        // res.wrtie(data);
        // res.end();
        if (err = null) {
            res.wrtie(data);
            res.end();
        } else {
            res.end("File Not Found!");
        }
    });
});