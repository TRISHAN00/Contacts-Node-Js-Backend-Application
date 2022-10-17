const express = require("express");
const morgan = require("morgan");
const app = express();
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/help", (req, res) => {
  res.render("pages/help");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

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

  res.render("pages/index", { serial: "second", post, posts });
});

app.post("/", (req, res) => {
  console.log(req.body.toString());
  res.send("This is home page");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
