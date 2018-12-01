var mongoose  = require('mongoose');
var Gallery   = mongoose.model('Gallery');
var upload    = require('../routes/upload');

module.exports.saveData = (req, res, next) => {
    upload(req, res,(error) => {
        if(error){
            return res.status(404).json({ status: false, error: error });
        }else{
          if(req.file == undefined){
            return res.status(404).json({ status: false, error: error });
          }else{
              /**
               * Create new record in mongoDB
               */
              var fullPath = req.file.filename;
  
              var gallery = new Gallery();
              gallery.path = fullPath;
              gallery.caption = req.body.caption;
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