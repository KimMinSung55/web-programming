const express = require('express');
const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to My Home!</h1>');
});

app.get('/about', (req, res) => {
    res.status(200).send('<h1>Here = KOYS HOME, about page</h1>');
})

app.listen(3000, () => {
    console.log('Server listen on 3000 port');
});