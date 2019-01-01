const mongoose = require('mongoose');

const upComingSchema = new mongoose.Schema({
    movie:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    }],
    createdAt:{
        type:Date,
        default: Date.now
    },
});

mongoose.model('UpComingMovie', upComingSchema);