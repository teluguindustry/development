const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating:{
        type:String
    },
    movie:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    updatedAt:{
        type:Date
    }
});

mongoose.model('MovieReview', reviewSchema);