const express = require('express');

const app = express();

app.use(function (req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.end('<h1>Express Server에서 응답한 결과입니다.</h1>');
});
app.listen(3000, () => {
    console.log('Server listen on 3000 port');
});