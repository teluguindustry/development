const mongoose = require('mongoose');

const pramotionsSchema = new mongoose.Schema({
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

mongoose.model('Pramotions', pramotionsSchema);