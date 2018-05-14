var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers/:name", function (req, res) {
    burger.insertOne(req.params.name, function (result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log("id: ", req.params.id);
    burger.updateOne(req.params.id, function (changedRowCount) {
        if (changedRowCount == 0) {
            console.log("no rows were changed"); // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/clear", function (req, res) {
    burger.deleteAll(function(affectedRowCount) {
        if (affectedRowCount == 0) {
            console.log("no rows were deleted"); // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// Export routes for server.js to use.
module.exports = router;