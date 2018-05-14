var connection = require("./connection");


var cleanMySqlResponse = function (sqlIn) {
    return JSON.parse(JSON.stringify(sqlIn));
};

var orm = {    

    selectAll: function (aTableName, aCallback) {
        var q = `SELECT * FROM ${aTableName};`;
        console.log(q);
        connection.query(q, function (err, res) {
            if (err) throw err;
            aCallback(cleanMySqlResponse(res));
        });
    },


    insertOne: function (aTableName, aBurgerName, aCallback) {
        var q = `INSERT INTO ${aTableName} SET burger_name = "${aBurgerName}", devoured = 0;`;
        console.log(q);
        connection.query(q, function(err, res) {
            if(err)throw err;
            aCallback(res.affectedRows);
        });
    },

    updateOne: function (aTableName, aId, aCallback) {
        var q = `UPDATE ${aTableName} SET devoured = true WHERE id = ${aId};`;
        console.log(q);     
        connection.query(q, function(err, res) {
            if(err)throw err;
            aCallback(res);
        });
    },

    deleteAll: function (aTableName, aCallback) {
        var q = `DELETE FROM ${aTableName} WHERE devoured = true;`;
        connection.query(q, function(err, res) {
            if(err) throw err;
            aCallback(res);
        });
    }
};

module.exports = orm;