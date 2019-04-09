// const env = require("dotenv").config().parsed;
// const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, "./dist")));

app.listen(port, () => console.log(` app listening on port ${port}!`));

module.exports = { app };
