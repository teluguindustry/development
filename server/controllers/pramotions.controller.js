const mongoose = require('mongoose');
const _ = require('lodash');
var upload    = require('../routes/nowplayingUpload');

const Pramotions = mongoose.model('Pramotions');

module.exports.saveData = (req, res, next) => {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }
        
        var movie = req.body.movies.split(',');

        var pramotions = new Pramotions();
        pramotions.movie = movie;
        pramotions.save((err, doc) => {
        if (!err)
            return res.status(200).json({ status: true, message:"Pramotions Created", pramotions : doc });
        else
            return res.status(404).json({ status: false, error: next(err) });
        });
    });
}

module.exports.getAllPramotions = (req, res, next) =>{
    Pramotions.find({}).sort({createdAt: 'desc'}).populate('movie', ['name', 'poster'])
    .exec(function(err, result){
        if (!result)
            return res.status(404).json({ status: false, message: 'Records not found.' });
        else
            return res.status(200).json({ status: true, pramotions : result });
    })
}

module.exports.getPramotion = (req, res) =>{
    Pramotions.findById(req.params.id).populate('movie', 'name')
    .exec(function(err, result){
        if (!result)
            return res.status(404).json({ status: false, message: 'Records not found.' });
        else
            return res.status(200).json({ status: true, pramotions : result });
    })
}

module.exports.updatePramotions = function (req, res, next) {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        } 
        var movie = req.body.movies.split(',');
        var objForUpdate = {};
        if (req.body.movies) objForUpdate.movie = movie;

        var newvalues = {$set: objForUpdate };
        Pramotions.updateOne({_id: req.body.id}, newvalues, function (err, result) {
            if (err)
                    return res.status(404).json({ status: false, error: next(err) });
                else
                    return res.status(200).json({ status: true, message: 'Pramotions Updated',pramotions : result });
        
        });
    });
}
