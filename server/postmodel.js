const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  img: String,
  title: String,
  posttype: String,
});

mongoose.model('Post', postSchema);
