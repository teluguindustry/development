const mongoose = require('mongoose');
const _ = require('lodash');
var upload    = require('../routes/newsPicUpload');

const News = mongoose.model('News');

module.exports.saveData = (req, res, next) => {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }else{
          if(req.file == undefined){
            return res.status(404).json({ status: false, error: error });
          }else{
            var celebrity = req.body.relatedcelebrity.split(',');

            var news = new News();
            news.title = req.body.title;
            news.newsposter = req.file.filename;
            news.description = req.body.description;
            news.movie = req.body.movie;
            news.relatedcelebrity = celebrity;
            news.save((err, doc) => {
                if (!err)
                    return res.status(200).json({ status: true, message:"News Created", news : doc });
                else
                    return res.status(404).json({ status: false, error: next(err) });
            });
        }
      }
    });
}

module.exports.getAllNews = (req, res, next) =>{
    News.find({}).populate('relatedcelebrity', ['firstName', 'lastName'])
    .populate('movie', 'name')
    .exec(function(err, news){
        if (!news)
            return res.status(404).json({ status: false, message: 'Records not found.' });
        else
            return res.status(200).json({ status: true, news : news });
    })
}

module.exports.getNews = (req, res) =>{
    News.findById(req.params.id, function (err, news) {
        if (err)
            return res.status(404).json({ status: false, error: next(err) });
        else
            return res.status(200).json({ status: true, news : news });
    });
};

module.exports.updateNews = function (req, res, next) {
    var poster = null;
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }else{
          if(req.file == undefined){
            poster = null;
          }else{
              poster = req.file.filename;
        }
            var celebrity = req.body.relatedcelebrity.split(',');
            var objForUpdate = {};

            if (poster != null) objForUpdate.newsposter = poster;
            if (req.body.title) objForUpdate.title = req.body.title;
            if (req.body.newsposter) objForUpdate.newsposter = req.body.newsposter;
            if (req.body.description) objForUpdate.description = req.body.description;
            if (req.body.movie) objForUpdate.movie = req.body.movie;
            if (req.body.relatedcelebrity) objForUpdate.relatedcelebrity = celebrity;

            var newvalues = {$set: objForUpdate };
            News.updateOne({_id: req.body.id}, newvalues, function (err, result) {
                if (err)
                        return res.status(404).json({ status: false, error: next(err) });
                    else
                        return res.status(200).json({ status: true, message: 'News Updated',news : result });
            
            });
      }
    });
};