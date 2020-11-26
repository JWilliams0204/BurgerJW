var connection = require(".../config/connection.js");
// Object for my sql statements that insert and update the burgers
var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if(err) throw err;

        }),
        cb(result);
        console.log(result);
    },
    insertBurger: function(answer, cb) {
        connection.query("INSERT INTO burgers SET ?", [answer], function(err, result) {
            if(err) throw err;
            cb(result);
            console.log("New burger added to the table");
            
        })
    },
    updateBurger: function(answer, cb) {
        connection.query("Update new burgers SET ? where Id =?", [newBurger, oldBurger], function(err, result) {
         if(err) throw err;   
        }),
        cb(result);
    }

};
//sends the orm to the model burger.js//
module.exports = orm;