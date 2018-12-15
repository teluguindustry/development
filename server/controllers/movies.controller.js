const mongoose = require('mongoose');
const _ = require('lodash');
var upload    = require('../routes/moviePicUpload');

const Movie = mongoose.model('Movie');

module.exports.saveData = (req, res, next) => {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }else{
          if(req.file == undefined){
            return res.status(404).json({ status: false, error: error });
          }else{
            var director = req.body.director.split(',');
            var producer = req.body.producer.split(',');
            var screenplay = req.body.screenplay.split(',');
            var story = req.body.story.split(',');
            var starring = req.body.starring.split(',');
            var music = req.body.music.split(',');
            var cinematography = req.body.cinematography.split(',');
            var edited = req.body.edited.split(',');
            var productionCompany = req.body.productionCompany.split(',');
            var distributedBy = req.body.distributedBy.split(',');

            var movie = new Movie();
            movie.name = req.body.name;
            movie.poster = req.file.filename;
            movie.description = req.body.description;
            movie.director = director;
            movie.producer = producer;
            movie.screenplay = screenplay;
            movie.story = story;
            movie.starring = starring;
            movie.music = music;
            movie.cinematography = cinematography;
            movie.edited = edited;
            movie.productionCompany = productionCompany;
            movie.distributedBy = distributedBy;
            movie.releasedate = req.body.releasedate;
            movie.language = req.body.language;
            movie.save((err, doc) => {
                if (!err)
                    return res.status(200).json({ status: true, message:"Movie Created", movie : doc });
                else
                    return res.status(404).json({ status: false, error: next(err) });
            });
          }
        }
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

module.exports.updateMovie = function (req, res, next) {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }else{
          if(req.file == undefined){
            return res.status(404).json({ status: false, error: error });
          }else{
            var director = req.body.director.split(',');
            var producer = req.body.producer.split(',');
            var screenplay = req.body.screenplay.split(',');
            var story = req.body.story.split(',');
            var starring = req.body.starring.split(',');
            var music = req.body.music.split(',');
            var cinematography = req.body.cinematography.split(',');
            var edited = req.body.edited.split(',');
            var productionCompany = req.body.productionCompany.split(',');
            var distributedBy = req.body.distributedBy.split(',');

            Movie.updateOne({_id: req.body.id}, {$set: {
                name: req.body.name,
                poster: req.file.filename,
                description: req.body.description,
                director: director,
                producer: producer,
                screenplay: screenplay,
                story: story,
                starring: starring,
                music: music,
                cinematography: cinematography,
                edited: edited,
                productionCompany: productionCompany,
                distributedBy: distributedBy,
                releasedate: req.body.releasedate,
                language: req.body.language
             }
             }, function (err, result) {
                if (err)
                        return res.status(404).json({ status: false, error: next(err) });
                    else
                        return res.status(200).json({ status: true, message: 'Movie Updated',movie : result });
             
            });
        }
      }
    });
};