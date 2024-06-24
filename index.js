const dotEnv = require("dotenv");
const express = require("express");
const app = express();

dotEnv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/instagram", (req, res) => {
  res.send("instagram.com/ritik_prakash_");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Successful </h1>");
});

app.get("/portfolio", (req, res) => {
  res.send(
    "<a target = '_blank' href = 'ritikprakash.netlify.app'>www.ritikprakash.netlify.app</h1>"
  );
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
