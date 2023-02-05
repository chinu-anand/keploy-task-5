const express = require('express');
const router = express.Router();
const Movie = require('../model/movie');

//Get all anime movies from database
router.get('/movielist', async (req, res)=> {
    const movies = await Movie.find();
    res.status(200).json(movies);
});

module.exports = router;