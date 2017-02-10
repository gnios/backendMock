var express = require("express");
var bodyParser = require("body-parser");
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
var teacher = require("./routes/teacherSucessRoute")(app);
var teacher2 = require("./routes/teacherErrorRoute")(app);
 
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});