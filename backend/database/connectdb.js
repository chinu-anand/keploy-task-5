const mongoose = require('mongoose');

const connectdb = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb+srv://admin-chinu:anime-chinu@cluster0.p4vat0y.mongodb.net/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(
        console.log("Database connected")
    );
};

module.exports = connectdb;