const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const port = 8000;

const app = express();

app.use(express.json());
app.use(cors())

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

app.get('/movielist', (req, res) => {
    fs.readFile(__dirname + '/data/' + 'movies.json', (err, data) => {
        res.end(data);
    })
})

app.get('/animelist', (req, res) => {
    fs.readFile(__dirname + '/data/' + 'anime.json', (err, data) => {
        res.end(data);
    })
})