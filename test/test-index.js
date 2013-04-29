var Tugg = require('../');
var api_key = 'abc';

module.exports = {

  'test config': function(test) {
    var tugg = new Tugg({api_key: api_key});
    test.deepEqual(tugg.config.api_key, api_key);
    test.deepEqual(tugg.config.hostname, 'www.tugg.com');
    test.done();
  }
}