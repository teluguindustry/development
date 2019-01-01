const mongoose = require('mongoose');
const _ = require('lodash');
var upload    = require('../routes/nowplayingUpload');

const NowPlaying = mongoose.model('NowPlayingMovie');

module.exports.saveData = (req, res, next) => {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }
        
        var movie = req.body.movies.split(',');

        var nowplaying = new NowPlaying();
        nowplaying.movie = movie;
        nowplaying.save((err, doc) => {
        if (!err)
            return res.status(200).json({ status: true, message:"Nowplaying Created", nowplaying : doc });
        else
            return res.status(404).json({ status: false, error: next(err) });
        });
    });
}

module.exports.getAllNowPlaying = (req, res, next) =>{
    NowPlaying.find({}).sort({createdAt: 'desc'}).populate('movie', 'name')
    .exec(function(err, result){
        if (!result)
            return res.status(404).json({ status: false, message: 'Records not found.' });
        else
            return res.status(200).json({ status: true, nowplaying : result });
    })
}

module.exports.getNowPlaying = (req, res) =>{
    NowPlaying.findById(req.params.id).populate('movie', 'name')
    .exec(function(err, result){
        if (!result)
            return res.status(404).json({ status: false, message: 'Records not found.' });
        else
            return res.status(200).json({ status: true, nowplaying : result });
    })
}

module.exports.updateNowPlaying = function (req, res, next) {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }
        var movie = req.body.movies.split(',');
        var objForUpdate = {};
        if (req.body.movies) objForUpdate.movie = movie;

        var newvalues = {$set: objForUpdate };
        NowPlaying.updateOne({_id: req.body.id}, newvalues, function (err, result) {
            if (err)
                    return res.status(404).json({ status: false, error: next(err) });
                else
                    return res.status(200).json({ status: true, message: 'Nowplaying Updated',nowplaying : result });
        
        });
    });
}
