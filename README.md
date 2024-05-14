# MongoDB Connection Setup

To connect to MongoDB, set your username and password in the connection string.

# Starting the Server

To start the server, run:


# 1) Creating a Post

Make a POST request to `http://localhost:3000/posts`.

If you are testing it on Postman, the body should be:

```json
{
  "title": "Sample Post",
  "content": "This is a sample post content."
}
Adding a Comment to a Po
Make a POST request to http://localhost:3000/comments/PostId, replacing PostId with the ID of the post.

Provide the kind of rich text you want to post before the text. For example:

json
Copy code
{
  "text": "This is a *bold* and _italic_ comment.",
  "markdownContent": "This is a **bold** and _italic_ comment."
}
Ensure you follow the proper markdown syntax for formatting.
