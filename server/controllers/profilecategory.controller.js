const mongoose = require('mongoose');

const ProfileCategory = mongoose.model('ProfileCategory');

module.exports.createPcategory = (req, res, next) => {
    var profileCategory = new ProfileCategory();
    profileCategory.categoryname = req.body.categoryName;
    profileCategory.save((err, doc) => {
        if(!err)
            res.send(doc);
        else {
            return next(err);
        }
    });
}

module.exports.celebrityCategory = (req, res, next) =>{
    ProfileCategory.findOne({ _id: req._id },
        (err, profileCategory) => {
            if (!profileCategory)
                return res.status(404).json({ status: false, message: 'No records found.' });
            else
                return res.status(200).json({ status: true, profileCategory : _.pick(profileCategory,['categoryName']) });
        }
    );
}