const mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    categoryName:{
		type:String,
		required:'Category can\'t be empty'
	}
});

mongoose.model("ProfileCategory", categorySchema);