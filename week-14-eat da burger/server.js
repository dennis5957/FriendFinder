var port = 3000;
var bodyParser = require("body-parser");
var express = require("express");
var exphbs  = require("express-handlebars");
var routes = require("./controllers/burgers_controller");
 
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(routes);
 
app.engine("handlebars", exphbs({defaultLayout: "main"}));

app.set("view engine", "handlebars");
 
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});