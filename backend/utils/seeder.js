const Anime = require('../model/anime');
const Movie = require('../model/movie');
const connectDb = require('../database/connectdb');
const anime = require('../data/anime.json');
const movie = require('../data/movies.json');

connectDb();

const seedData = async () => {
    try {
        // deleting all existing items
        await Anime.deleteMany();
        console.log("Animes are deleted successfully");
        // inserting all items from json file
        await Anime.insertMany(anime);
        console.log("Animes are inserted successfully");

        await Movie.deleteMany();
        console.log("Movies are deleted successfully");

        await Movie.insertMany(movie);
        console.log("Movies are inserted successfully");
        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedData();