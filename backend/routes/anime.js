const express = require('express');
const router = express.Router();
const Anime = require('../model/anime');



//Get all anime series from database
router.get('/animelist', async (req, res) => {
    const animes = await Anime.find();
    res.status(200).json(animes);
});

//Add a anime to database
router.post('/animelist', async (req, res) => {
    const anime = new Anime(
        {
            name: req.body.name,
            genre: req.body.genre,
            rating: req.body.rating
        }
    );

    try {
        const newAnime = await anime.save();
        res.status(201).json(newAnime);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

module.exports = router;