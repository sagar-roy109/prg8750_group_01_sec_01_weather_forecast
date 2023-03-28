const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//   img: String,
//   DOP: String,
//   title: String,
//   posttype: String,
// });

const postSchema = mongoose.Schema({
	title:String
})


mongoose.model('Post', postSchema);


