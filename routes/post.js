// routes/post.js
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Create a post
router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
