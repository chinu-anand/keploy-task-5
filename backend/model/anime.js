const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema(
    {
        name: 'String',
        genre: 'String',
        rating: Number
    }
)

module.exports = mongoose.model('anime', animeSchema);