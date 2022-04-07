const express = require("express");
const server = express();

const middleware1 = (req, res, next) => {
  console.log("This is middleware1");
  next();
};
const middleware2 = (req, res, next) => {
  console.log("This is middleware2");
  next();
};

server.use(middleware1);

server.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

server.get("/user", middleware2, (req, res) => {
  res.send("<h3>Hlo</h3>");
});

server.listen(3000);
