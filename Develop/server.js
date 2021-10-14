const fs = require('fs');
const express = require('express');
const apiController = require('./routes/apiController');
const htmlController = require('./routes/htmlController');

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/api', apiController);
app.use('/', htmlController);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});