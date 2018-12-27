const mongoose = require('mongoose');
const _ = require('lodash');
var upload    = require('../routes/nowplayingUpload');

const MovieReview = mongoose.model('MovieReview');

module.exports.saveData = (req, res, next) => {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }
        
        var movie = req.body.movies.split(',');

        var moviewreview = new MovieReview();
        moviewreview.rating = req.body.rating;
        moviewreview.movie = movie;
        moviewreview.save((err, doc) => {
        if (!err)
            return res.status(200).json({ status: true, message:"Movie Review Created", moviereview : doc });
        else
            return res.status(404).json({ status: false, error: next(err) });
        });
    });
}

module.exports.getAllMovieReviews = (req, res, next) =>{
    MovieReview.find({}).populate('movie', 'name')
    .exec(function(err, result){
        if (!result)
            return res.status(404).json({ status: false, message: 'Records not found.' });
        else
            return res.status(200).json({ status: true, moviereview : result });
    })
}

module.exports.getMovieReview = (req, res) =>{
    MovieReview.findById(req.params.id).populate('movie', 'name')
    .exec(function(err, result){
        if (!result)
            return res.status(404).json({ status: false, message: 'Records not found.' });
        else
            return res.status(200).json({ status: true, moviereview : result });
    })
}

module.exports.updateMovieReview = function (req, res, next) {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }
        var movie = req.body.movies.split(',');
        var objForUpdate = {};
        if (req.body.movies) objForUpdate.movie = movie;
        if (req.body.rating) objForUpdate.rating = req.body.rating;

        var newvalues = {$set: objForUpdate };
        MovieReview.updateOne({_id: req.body.id}, newvalues, function (err, result) {
            if (err)
                    return res.status(404).json({ status: false, error: next(err) });
                else
                    return res.status(200).json({ status: true, message: 'MovieReview Updated',moviereview : result });
        
        });
    });
}
