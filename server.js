const express = require("express");
const server = express();
const Recipe = require("./RecipeRouter/RecipeRouter");
server.use(express.json());

server.use("/api", Recipe);

module.exports = server;
