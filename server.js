var express = require("express");
var apiRoute = require("./apiroute.js");
var htmlRoute = require("./htmlroute.js");


var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))


app.use("/api", apiRoute);
app.use("/", htmlRoute);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
