var orm = require("../config/orm");

// orm.create("burgers", ["id", "burger_name", "devoured"], [null, "OMG", false], function(res) {
//     console.log("orm.create called back: res = " + res.insertId);
// });

// orm.read("burgers", function(res) {
//     console.log(res);
// });

// orm.update("burgers", ["burger_name", "devoured"], ["Bacon-A-Tor", true], 4 , function(res) {
//    // you can also use res.affectedRows, changedRows only reports how many were changed
//     console.log("orm.update called back, changed rows: " + res.changedRows);
// });

// orm.delete("burgers", "4", function(res) {
//     console.log(`orm.delete called back: affectedRows: ${res.affectedRows} | changedRows: ${res.changedRows}`);
// });
