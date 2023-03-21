const mongoose = require("mongoose");

const password = 'wS6wCjW3iFoOCjOS';
// connect to db
mongoose.connect(`mongodb+srv://sagar:${password}@weatherapp.rezxpzt.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
	console.log("DB Connected")
})
.catch(()=>{
	console.log('DB Connection failed');
})


const newSchema = new mongoose.Schema({
	email:{
		type:String,
		reuired:true
	},
	password:{
		type:String,
		required:true
	},
	role:{
		type:String,
		default: 'subscriber'
	}
})

const collection = mongoose.model("collection", newSchema);
module.exports=collection;
