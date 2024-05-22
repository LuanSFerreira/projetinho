const express = require('express');
const server = express();
const path = require('path');
const filmes = require('./menu/filmes.json');

server.use(express.static(path.join(__dirname, 'menu')));

server.get('/filmes', (req, res) => {
    return res.json(filmes);
});

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'menu', 'filmes.html'));
});

server.listen(3000, () => {
    console.log('Servidor okay!');
});
