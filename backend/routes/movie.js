const express = require('express');
const router = express.Router();
const Movie = require('../model/movie');

//Get all anime movies from database
router.get('/movielist', async (req, res)=> {
    const movies = await Movie.find();
    res.status(200).json(movies);
});

router.post('/movielist', async (req, res)=> {
    const movie = new Movie({
        name: req.body.name,
        genre: req.body.genre,
        rating: req.body.rating
    })

    try{
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    }catch(err){
        res.status(400).json(err.message);
    }
});

module.exports = router;