const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    year:
    {
        type: Number,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }

}
);
const MovieCollection = mongoose.model("movies", MovieSchema);
module.exports = MovieCollection;