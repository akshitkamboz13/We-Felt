// models/postsModel.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  context: { type: String, required: true },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
