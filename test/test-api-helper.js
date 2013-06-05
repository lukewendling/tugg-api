/* jslint node: true, indent: 2 */
"use strict";

var helper = require('../lib/api_helper');

module.exports = {

  'trimNamespace': function (test) {
    var obj = helper.trimNamespace('event', {event: {name: 'test'}});
    test.ok(obj.name);
    test.done();
  }
};