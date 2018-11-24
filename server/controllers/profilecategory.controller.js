const mongoose = require('mongoose');
const _ = require('lodash');

const ProfileCategory = mongoose.model('ProfileCategory');

module.exports.register = (req, res, next) => {
    var profilecategory = new ProfileCategory();
    profilecategory.categoryName = req.body.categoryName;
    profilecategory.save((err, doc) => {
        if(!err)
            return res.status(200).json({ status: true, profileCategory : doc });
        else {
            return res.status(404).json({ status: false, error: next(err) });
        }
    });
}

module.exports.getCategories = (req, res, next) =>{
    ProfileCategory.find({},
        (err, profilecategory) => {
            if (!profilecategory)
                return res.status(404).json({ status: false, message: 'Records not found.' });
            else
                return res.status(200).json({ status: true, profileCategory : profilecategory });
        }
    );
}

module.exports.getCategory = (req, res) =>{
    ProfileCategory.findById(req.params.id, function (err, profilecategory) {
        if (err)
            return res.status(404).json({ status: false, error: next(err) });
        else
            return res.status(200).json({ status: true, profileCategory : profilecategory });
    });
};

module.exports.updateCategory = function (req, res) {
    ProfileCategory.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, profilecategory) {
        if (err)
            return res.status(404).json({ status: false, error: next(err) });
        else
            return res.status(200).json({ status: true,  message: 'Category Updated', profileCategory : profilecategory });
    });
};