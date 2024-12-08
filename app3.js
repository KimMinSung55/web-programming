const express = require('express');
const app = express();

app.use(function(req, res, next) {
    console.log('First Middleware ...');
    req.user = 'Sung';
    next();
},
function(req, res, next) {
    console.log('Second Middleware ...');
    res.status(200).send(`<h1>${req.user} respond at Express Server</h1>`);
});

app.listen(500);