# Why I chose this database

MongoDB was chosen for its flexibility, scalability, and ease of use when dealing with dynamic, schema-less data storage. Its document-oriented paradigm works well with modern online applications. MongoDB's powerful query language, indexing, and support for distributed architectures make it an excellent choice for applications that require high availability and performance.

# MongoDB Connection Setup
To connect to MongoDB, set your username and password in the connection string in `index.js`.

# Starting the Server

To start the server, run:
npm run dev

# Create the Post

<h3>If you are testing it on Postman, the body should be:</h3>

<h3>Make a POST request to http://localhost:3000/posts.</h3>

```json
{
  "title": "Sample Post",
  "content": "This is a sample post content."
}
```
![image](https://github.com/PrakharArora/Application-Assignment-CloudSek/assets/106022380/df37b633-5fcf-4655-8a15-df9e16bc340d)


# Adding Comment to a post
<h3>To add a comment, make a POST request to http://localhost:3000/comments/PostId, replacing PostId with the ID of the post.</h3>


```json
{
  "text": "This is a *bold* and _italic_ comment.",
  "markdownContent": "This is a **bold** and _italic_ comment."
}

```
![image](https://github.com/PrakharArora/Application-Assignment-CloudSek/assets/106022380/7078c436-d92a-4d15-a561-0e6407409285)
