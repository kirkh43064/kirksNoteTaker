const path = require('path');
const controller = require('express').Router();


controller.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/notes.html'));
});

controller.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'));
});

module.exports = controller;