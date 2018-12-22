var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var gallerySchema = new Schema({
  path:  { type: Array },
  caption: { type: String },
  category:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProfileCategory',
      required: true
  }],
  starring:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CelebrityProfile',
      required: true
  }]
});

mongoose.model('Gallery', gallerySchema);

