const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
	fname :String,
	lname :String,
	email : {
		type: String,
		unique: true
	},
	password: String,
	admin:{
		type: Boolean,
		default: false
	}
},
{
	collection: "Users"
}
);

mongoose.model("Users",userSchema);
