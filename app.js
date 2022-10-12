const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let post = {
    title: "Post Title",
    body: "Post Body",
    published: false,
  };

  let posts = [
    { title: "Top 10 News", author: "Trishan" },
    { title: "Top 5 News", author: "Jho" },
    { title: "Top 7 News", author: "Liza" },
    { title: "Top 1 News", author: "Rishan" },
  ];

  res.render("index", { serial: "second", post, posts });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
