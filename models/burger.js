const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
       orm.selectAll(cb) 
    },

    insertBurger: function(cols, vals, cb) {
        orm.insertBurger(cols, vals, function(result){
          cb(result);  
        });
        
    },
    
    updateBurger: function(objectColVal, oldBurg, cb) {
        orm.updateBurger(objectColVal, oldBurg, function(result){
            cb(result);
        });
    },
    


   
        
    

    

    
};
//exports the database functions to the controller
module.exports = burger;