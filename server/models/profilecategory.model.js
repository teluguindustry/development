const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:'Category name can\'t be empty'
    },
    createdAt:{
        type: Date, 
        default: Date.now
    },
    updatedAt:{
        type: Date
    }
});

mongoose.model('ProfileCategory', categorySchema); 