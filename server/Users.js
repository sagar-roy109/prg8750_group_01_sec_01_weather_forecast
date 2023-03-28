const mongoose = require("mongoose");
const citySchema = mongoose.Schema({
	city:String
})
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
	},
	cities:{
		type: Array
	}
},
{
	collection: "Users"
}
);

mongoose.model("Users",userSchema);
