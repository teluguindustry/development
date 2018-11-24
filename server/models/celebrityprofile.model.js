const mongoose = require('mongoose');

const celebrityProfileSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:'First name can\'t be empty'
    },
    lastName:{
        type:String
    },
    profilePic:{
        type:String
    },
    dateOfBirth:{
        type:Date
    },
    height:{
        type:String
    },
    biodata:{
        type:String,
        required:'Biodata can\'t be empty'
    },
    education:{
        type:String
    },
    spouse:{
        type:Object
    },
    socialNetwork:{
        type:Object
    },
    category:{
        type:Array
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    updatedAt:{
        type:Date
    },

});

mongoose.model('CelebrityProfile', celebrityProfileSchema);