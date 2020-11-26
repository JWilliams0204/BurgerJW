//setting up the MYSQL connection.
require("dotenv").config();
var mysql = require("mysql");

var connection = mysql.createconnection({
    host: "localhost",
    port: 3030,
    user: "root",
    password: "Pathwill#1",
    database: "burgers_db"

});

connection.connect(function(err) {
    if(err) {
        console.log("error connecting:" + err.stack);
        return;
    }
    console.log("connected as Id" + connection.threadId);
});

//exporting the connection to the orm.
module.exports = connection;