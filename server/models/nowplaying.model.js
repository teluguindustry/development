const mongoose = require('mongoose');

const nowPlayingSchema = new mongoose.Schema({
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

mongoose.model('NowPlayingMovie', nowPlayingSchema);