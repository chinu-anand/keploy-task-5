const Anime = require('../model/anime');
const connectDb = require('../database/connectdb');
const anime = require('../data/anime.json');

connectDb();

const seedData = async () => {
    try {
        // deleting all existing products
        await Anime.deleteMany();
        console.log("Animes are deleted successfully");

        await Anime.insertMany(anime);
        console.log("Animes are inserted successfully");
        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedData();