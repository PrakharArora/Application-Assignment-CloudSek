const express = require("express");
const router = express.Router();
const Comment = require("../models/comment");
const Post = require("../models/post");
const markdown = require("markdown-it")();

router.post("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const markdownContent = req.body.markdownContent;
    const htmlContent = markdown.render(markdownContent);

    const comment = await Comment.create({
      text: req.body.text,
      markdownContent: markdownContent,
      htmlContent: htmlContent,
    });

    post.comments.push(comment._id);
    await post.save();

    res.json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
