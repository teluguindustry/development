const mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    categoryName:{
		type:String,
		required:'Category can\'t be empty'
	},
    createdAt:{
        type:Date,
        default: Date.now
    },
});

mongoose.model("ProfileCategory", categorySchema);