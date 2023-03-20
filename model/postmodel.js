const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  img: String,
  DOP: String,
  title: String,
  posttype: String,
});

const post = mongoose.model('post', postSchema);
module.exports = post;
