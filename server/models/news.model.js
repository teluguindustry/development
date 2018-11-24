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
        type:String
    },
    relatedcelebrity:{
        type:Array
    },
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