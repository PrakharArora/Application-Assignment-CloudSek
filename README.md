# MongoDB Connection Setup

To connect to MongoDB, set your username and password in the connection string in index.js.

# Starting the Server

To start the server, run:
npm run dev

```bash


# Creating Post
1) Creating a Post
Make a POST request to http://localhost:3000/posts

If you are testing it on Postman, the body should be:

{
  "title": "Sample Post",
  "content": "This is a sample post content."
}

 2) Adding a Comment
To add a comment, make a POST request to http://localhost:3000/comments/PostId, replacing PostId with the ID of the post.

{
  "text": "This is a *bold* and _italic_ comment.",
  "markdownContent": "This is a **bold** and _italic_ comment."
}
