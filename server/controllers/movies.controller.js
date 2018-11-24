const mongoose = require('mongoose');
const _ = require('lodash');

const Movie = mongoose.model('Movie');

module.exports.saveData = (req, res, next) => {
    var movie = new Movie();
    movie.name = req.body.name;
    movie.poster = req.body.poster;
    movie.description = req.body.description;
    movie.director = req.body.director;
    movie.producer = req.body.producer;
    movie.screenplay = req.body.screenplay;
    movie.story = req.body.story;
    movie.starring = req.body.starring;
    movie.music = req.body.music;
    movie.cinematography = req.body.cinematography;
    movie.edited = req.body.edited;
    movie.productionCompany = req.body.productionCompany;
    movie.distributedBy = req.body.distributedBy;
    movie.releasedate = req.body.releasedate;
    movie.language = req.body.language;
    movie.save((err, doc) => {
        if (!err)
            return res.status(200).json({ status: true, message:"Movie Created", movie : doc });
        else
            return res.status(404).json({ status: false, error: next(err) });
    });
}

module.exports.getMovies = (req, res, next) =>{
    Movie.find({},
        (err, movie) => {
            if (!movie)
                return res.status(404).json({ status: false, message: 'Records not found.' });
            else
                return res.status(200).json({ status: true, movies : movie });
        }
    );
}

module.exports.getMovie = (req, res) =>{
    Movie.findById(req.params.id, function (err, movie) {
        if (err)
            return res.status(404).json({ status: false, error: next(err) });
        else
            return res.status(200).json({ status: true, movie : movie });
    });
};

module.exports.updateMovie = function (req, res) {
    Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, movie) {
        if (err)
            return res.status(404).json({ status: false, error: next(err) });
        else
            return res.status(200).json({ status: true, message: 'Movie Updated',movie : movie });
    });
};