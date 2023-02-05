const express = require('express');
const cors = require('cors');

const anime = require('./routes/anime');
const movie = require('./routes/movie');

const connectdb = require('./database/connectdb');

const PORT = 8000;

connectdb();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

app.use('/', anime);
app.use('/', movie);