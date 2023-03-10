const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema(
    {
        name: {
            type: 'String',
            required: true,
        },
        genre: 'String',
        rating: Number
    }
)

module.exports = mongoose.model('anime', animeSchema);