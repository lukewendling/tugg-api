/**
 * misc. helper functions
 */

var apiHelper = {


  parseJSONResponse: function(type, res) {
    var s = JSON.stringify(res);
    var e = JSON.parse(s);
    return e[type];
  }

};

module.exports = apiHelper;