const mongoose = require('mongoose');

const nowPlayingSchema = new mongoose.Schema({
    movie:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    }]
});

mongoose.model('NowPlayingMovie', nowPlayingSchema);