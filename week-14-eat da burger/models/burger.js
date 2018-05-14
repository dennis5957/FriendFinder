var orm = require("../config/orm");

var burger = {
  selectAll: function(aCallback) {
    orm.selectAll("burgers", function(res) {
      aCallback(res);
    });
  },
  insertOne: function(aBurgerName, aCallback) {
    orm.insertOne("burgers", aBurgerName, function(res) {
        aCallback(res);
    });
  },
  updateOne: function(aBurgerId, aCallback) {
    orm.updateOne("burgers", aBurgerId, function(res) {
        aCallback(res.changedRows);
    });
  },
  deleteAll: function(aCallback) {
    orm.deleteAll("burgers", function(res) {
      aCallback(res.affectedRows);
    });
  }
};

module.exports = burger;