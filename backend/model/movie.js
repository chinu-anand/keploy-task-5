const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        name: {
            type: 'String',
            required: true,
        },
        genre: 'String',
        rating: Number
    }
)

module.exports = mongoose.model('movie', movieSchema);