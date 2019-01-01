const mongoose = require('mongoose');
const _ = require('lodash');
var upload    = require('../routes/nowplayingUpload');

const UpComingMovie = mongoose.model('UpComingMovie');

module.exports.saveData = (req, res, next) => {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }
        
        var movie = req.body.movies.split(',');

        var upcoming = new UpComingMovie();
        upcoming.movie = movie;
        upcoming.save((err, doc) => {
        if (!err)
            return res.status(200).json({ status: true, message:"Upcoming Created", upcoming : doc });
        else
            return res.status(404).json({ status: false, error: next(err) });
        });
    });
}

module.exports.getAllUpComing = (req, res, next) =>{
    UpComingMovie.find({}).sort({createdAt: 'desc'}).populate('movie', 'name')
    .exec(function(err, result){
        if (!result)
            return res.status(404).json({ status: false, message: 'Records not found.' });
        else
            return res.status(200).json({ status: true, upcoming : result });
    })
}

module.exports.getUpComing = (req, res) =>{
    UpComingMovie.findById(req.params.id).populate('movie', 'name')
    .exec(function(err, result){
        if (!result)
            return res.status(404).json({ status: false, message: 'Records not found.' });
        else
            return res.status(200).json({ status: true, upcoming : result });
    })
}

module.exports.updateUpComing = function (req, res, next) {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        } 
        var movie = req.body.movies.split(',');
        var objForUpdate = {};
        if (req.body.movies) objForUpdate.movie = movie;

        var newvalues = {$set: objForUpdate };
        UpComingMovie.updateOne({_id: req.body.id}, newvalues, function (err, result) {
            if (err)
                    return res.status(404).json({ status: false, error: next(err) });
                else
                    return res.status(200).json({ status: true, message: 'Upcoming Movies Updated',upcoming : result });
        
        });
    });
}
