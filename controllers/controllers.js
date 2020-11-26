const express = require("express");

const router = express.router();

const burger = require("../models/burger.js");
//creates all the routes and sets up the logic within the routes required.
router.get("/", function(req, res) {
    burger.selectAll(function(data){
        const burObject = {
            burgers: data
        };
        console.log(burObject);
        res.render("index", burObject);
    })
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(
        ["burger_name"], [req.body.name],
        function(result) {
            res.redirect("/");
        }
    )
});

router.get("/api/burgers/:id", function(req, res) {
    const oldBurg = "id =" + req.params.id;
    
    burger.updateOne({
        devoured: true,
    }), 
    oldBurg, function(result) {
        if (result.cahngedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.redirect("/");
            res.status(200).end();
        }
    }
});

//exports routes to the server.js file.
module.exports = router;