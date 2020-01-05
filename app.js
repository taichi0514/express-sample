const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const router = require("./models/route/v1/");
app.use("/api/v1/", router);
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on("error", function(err) {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});
//サーバ起動
app.listen(port);
console.log("listen on port " + port);
