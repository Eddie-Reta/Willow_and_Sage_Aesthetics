const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
// const fetch = require("node-fetch");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 8080;
// view engine setup
app.set("views", path.join(__dirname, 'app/views/pages'));
app.set('view engine', "ejs");

app.use(express.static(path.join(__dirname, 'app')));

app.get("/", (req, res, next) => {
  res.render("index");
  next();
})

app.get('/services', function (req, res, next) {
  res.render("services");
  next();
 });

 app.get('/about', function (req, res, next) {
  res.render("about");
  next();
 });

app.listen(PORT, () => {
  console.log(`App now running on ${PORT}`);
})