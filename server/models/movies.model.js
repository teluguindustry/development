const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:'Movie name can\'t be empty'
    },
    poster:{
        type:String
    },
    description:{
        type:String
    },
    director:{
        type:Array
    },
    producer:{
        type:Array
    },
    screenplay:{
        type:Array
    },
    story:{
        type:Array
    },
    starring:{
        type:Array
    },
    music:{
        type:Array
    },
    cinematography:{
        type:Array
    },
    edited:{
        type:Array
    },
    productionCompany:{
        type:Array
    },
    distributedBy:{
        type:Array
    },
    releasedate:{
        type:String
    },
    language:{
        type:String
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    updatedAt:{
        type:Date
    }
});

mongoose.model('Movie', movieSchema);