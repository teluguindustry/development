const mongoose = require('mongoose');

const upComingSchema = new mongoose.Schema({
    movie:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    }]
});

mongoose.model('UpComingMovie', upComingSchema);