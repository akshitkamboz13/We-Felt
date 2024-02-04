// userModel.js
const { Schema, model } = require('mongoose');

const savedPostSchema = new Schema({
  postId: { type: String, required: true },
});

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedPosts: [savedPostSchema],
});

const User = model('User', userSchema);

module.exports = User;
