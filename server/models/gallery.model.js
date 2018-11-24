var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var gallerySchema = new Schema({
  path:  { type: String },
  caption: { type: String }
  });

mongoose.model('Gallery', gallerySchema);

