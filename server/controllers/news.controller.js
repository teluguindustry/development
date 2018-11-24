const mongoose = require('mongoose');
const _ = require('lodash');

const News = mongoose.model('News');

module.exports.saveData = (req, res, next) => {
    var news = new News();
    news.title = req.body.title;
    news.newsposter = req.body.newsposter;
    news.description = req.body.description;
    news.movie = req.body.movie;
    news.relatedcelebrity = req.body.relatedcelebrity;
    news.save((err, doc) => {
        if (!err)
            return res.status(200).json({ status: true, message:"News Created", news : doc });
        else
            return res.status(404).json({ status: false, error: next(err) });
    });
}

module.exports.getAllNews = (req, res, next) =>{
    News.find({},
        (err, news) => {
            if (!news)
                return res.status(404).json({ status: false, message: 'Records not found.' });
            else
                return res.status(200).json({ status: true, news : news });
        }
    );
}

module.exports.getNews = (req, res) =>{
    News.findById(req.params.id, function (err, news) {
        if (err)
            return res.status(404).json({ status: false, error: next(err) });
        else
            return res.status(200).json({ status: true, news : news });
    });
};

module.exports.updateNews = function (req, res) {
    News.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, news) {
        if (err)
            return res.status(404).json({ status: false, error: next(err) });
        else
            return res.status(200).json({ status: true, message: 'News Updated',news : news });
    });
};