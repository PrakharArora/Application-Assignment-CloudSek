// models/comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  markdownContent: String,
  htmlContent: String
});

module.exports = mongoose.model('Comment', commentSchema);
