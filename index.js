const { log } = require("console");
const express = require("express");

const app = express();
const port = 5000;

app.set("view engine", "hbs");

app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/project", function (req, res) {
  res.render("myproject");
});

app.post("/project", function (req, res) {
  console.log(req.body);

  res.redirect("/");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/project-detail/:id", function (req, res) {
  let id = req.params.id;
  res.render("project-detail", {
    project: {
      id,
      title: "Dumbways web belajar",
      content: "lore lore lore RIP love wkwk",
    },
  });
});

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
