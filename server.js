const express = require("express");


const PORT = process.env.PORT || 8080;

const app = express();
//static content for the app from the "public" directory
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exhbrs = require("express-handlebars");

app.engine("handlebars", exhbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const routes = require("./controllers/burgers_controller.js");

app.use(routes);
//starts the server so that it can begin to listen to client calls
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});