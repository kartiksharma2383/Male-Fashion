const mongoose = require("mongoose");
const movieCollection = require("../../models/MovieSchema");

const moviecontroller = async (req, res) => {
    try {
        const { title, id } = req.params;
        let movies;
        if (title) {
            const searchtitle = title.toLowerCase();
            movies = await movieCollection.find({
                title: { $regex: new RegExp(searchtitle, "i") },
            });
        }


        else if (id) {
            //const searchSubtitle = subtitle.toLowerCase();
            movies = await movieCollection.find({
                _id: id
            });
        }

        else {
            movies = await movieCollection.find();
        }

        if (!movies || movies.length === 0) {
            res.status(404).send({ message: "No movies found" });
        } else {
            res.status(200).send(movies);
        }

        console.log("movie fetched successfully");

    }

    catch (err) {
        res.status(504).send({
            message: "Error fetching movies"
        });
        console.log(`Error occured : ${ err }`);
    };
}
module.exports = moviecontroller;