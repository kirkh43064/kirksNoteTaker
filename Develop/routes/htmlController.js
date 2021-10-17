const path = require('path');
const controller = require('express').Router();
// let __dirname = path.resolve();

controller.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

controller.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = controller;