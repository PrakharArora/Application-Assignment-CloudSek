const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

mongoose
  .connect(
    "mongodb+srv://<addyourmongoDbusername>:<addyourpasswordtotest>@cluster0.kvlfhjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const Post = require("./models/post");
const Comment = require("./models/comment");

app.use(bodyParser.json());

const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");

app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
