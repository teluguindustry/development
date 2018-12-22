var mongoose  = require('mongoose');
var Gallery   = mongoose.model('Gallery');
var upload    = require('../routes/upload');

module.exports.saveData = (req, res, next) => {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }else{
          if(req.files == undefined){
            return res.status(404).json({ status: false, error: error });
          }else{
              /**
               * Create new record in mongoDB
               */
            var tgallery = [];
            for(var val of req.files) {
                tgallery.push(val.filename);
            }
              var category = req.body.category.split(',');
              var starring = req.body.starring.split(',');
  
              var gallery = new Gallery();
              gallery.path = tgallery;
              gallery.caption = req.body.title;
              gallery.category = category;
              gallery.starring = starring;
              gallery.save((err, doc) => {
                if (!err)
                    return res.status(200).json({ status: true, message:"Gallery Created", gallery : doc });
                else
                    return res.status(404).json({ status: false, error: next(err) });
            });
        }
      }
    }); 
};

module.exports.getAllGallery = (req, res, next) =>{
    Gallery.find({}).populate('starring', ['firstName', 'lastName'])
    .populate('category', 'categoryName')
    .exec(function(err, gallery){
        if (!gallery)
            return res.status(404).json({ status: false, message: 'Records not found.' });
        else
            return res.status(200).json({ status: true, gallery : gallery });
    })
}


module.exports.getGallery = (req, res) =>{
    Gallery.findById(req.params.id).populate('starring', ['firstName'])
    .populate('category', 'categoryName')
    .exec(function(err, gallery){
        if (!gallery)
            return res.status(404).json({ status: false, error: next(err) });
        else
            return res.status(200).json({ status: true, gallery : gallery });
    })
};

module.exports.updateGallery = function (req, res, next) {
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
            
            var category = req.body.category.split(',');
            var starring = req.body.starring.split(',');
            var objForUpdate = {};

            if (poster != null) objForUpdate.path = poster;
            if (req.body.title) objForUpdate.caption = req.body.title;
            if (req.body.category) objForUpdate.category = category;
            if (req.body.starring) objForUpdate.starring = req.body.starring;
            var newvalues = {$set: objForUpdate };
            Gallery.updateOne({_id: req.body.id}, newvalues, function (err, result) {
                if (err)
                        return res.status(404).json({ status: false, error: next(err) });
                    else
                        return res.status(200).json({ status: true, message: 'Gallery Updated',gallery : result });
            
            });
      }
    });
}; 