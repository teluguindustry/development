const mongoose = require('mongoose');
const _ = require('lodash');
var upload    = require('../routes/profilepicUpload');

const CelebrityProfile = mongoose.model('CelebrityProfile');

module.exports.saveData = (req, res, next) => {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }else{
          if(req.file == undefined){
            return res.status(404).json({ status: false, error: error });
          }else{
            var category = req.body.category.split(',');

            var celebrityprofile = new CelebrityProfile();
            celebrityprofile.firstName = req.body.firstName;
            celebrityprofile.lastName = req.body.lastName;
            celebrityprofile.profilePic = req.file.filename;
            celebrityprofile.dateOfBirth = req.body.dateOfBirth;
            celebrityprofile.height = req.body.height;
            celebrityprofile.biodata = req.body.biodata;
            celebrityprofile.education = req.body.education;
            celebrityprofile.spouse = req.body.spouse;
            celebrityprofile.socialNetwork = req.body.socialNetwork;
            celebrityprofile.category = category;
            celebrityprofile.save((err, doc) => {
                if (!err)
                    return res.status(200).json({ status: true, message:"Profile Created", celebrityProfile : doc });
                else
                    return res.status(404).json({ status: false, error: next(err) });
            });
        }
      }
    });
}

module.exports.getProfiles = (req, res, next) =>{
    CelebrityProfile.find({},
        (err, celebrityprofile) => {
            if (!celebrityprofile)
                return res.status(404).json({ status: false, message: 'Records not found.' });
            else
                return res.status(200).json({ status: true, celebrityProfile : celebrityprofile });
        }
    );
}

module.exports.getProfile = (req, res, next) =>{
    CelebrityProfile.findById(req.params.id, function (err, celebrityprofile) {
        if (err)
            return res.status(404).json({ status: false, error: next(err) });
        else
            return res.status(200).json({ status: true, celebrityProfile : celebrityprofile });
    });
};

module.exports.updateProfile = function (req, res, next) {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }else{
          if(req.file == undefined){
            return res.status(404).json({ status: false, error: error });
          }else{

            var category = req.body.category.split(',');
            CelebrityProfile.updateOne({_id: req.body.id}, {$set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                profilePic: req.file.filename,
                dateOfBirth: req.body.dateOfBirth,
                height: req.body.height,
                biodata: req.body.biodata,
                education: req.body.education,
                spouse: req.body.spouse,
                category: category,
                socialNetwork: req.body.socialNetwork
             }
             }, function (err, result) {
                if (err)
                        return res.status(404).json({ status: false, error: next(err) });
                    else
                        return res.status(200).json({ status: true, message: 'Profile Updated',celebrityProfile : result });
             
            });
        }
      }
    });
    
};