const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const router = require("./models/route/v1/");
app.use("/api/v1/", router);
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const url =
  "mongodb://heroku_8hjd989v:s8gv7g88gh1nmn59v1upodg8i1@ds249017.mlab.com:49017/heroku_8hjd989v";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on("error", function(err) {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});
//サーバ起動
app.listen(port);
console.log("listen on port " + port);
