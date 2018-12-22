const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:'Title can\'t be empty'
    },
    newsposter:{
        type:String
    },
    description:{
        type:String
    },
    movie:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    relatedcelebrity:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CelebrityProfile',
        required: true
    }],
    isActive:{
        type:Boolean,
        default: true
    },
    publishedDate:{
        type:Date,
        default: Date.now
    },
    comment:{
        type:Object
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    updatedAt:{
        type:Date
    }
});

mongoose.model('News', newsSchema);