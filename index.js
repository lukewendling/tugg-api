/**
 * tugg-api - A node module for the Tugg API
 * Reference http://www.tugg.com/api
 */

var url = require('url');
var https = require('https');

/**
 * The TuggApi constructor
 * @param {Object} valiad options: api_key, api_version, hostname, port
 */
var TuggApi = function(options) {
  this.config = {
    api_key: options.api_key,
    version: options.api_version || '1',
    format: 'json',
    hostname: options.hostname || 'www.tugg.com',
    port: options.port || '443'
  };

  return this;
};

/**
 * Fetch a Tugg title by id
 * @param  {Integer} Title id
 * @param  {Function} callback function
 * @return {void}
 */
TuggApi.prototype.title = function(id, cb) {
  var path = 'titles/' + id.toString();
  this._get(path, cb);
};

/**
 * Fetch a Tugg event by id
 * @param  {Integer} Event id
 * @param  {Function} callback function
 * @return {void}
 */
TuggApi.prototype.event = function(id, cb) {
  var path = 'events/' + id.toString();
  this._get(path, cb);
};


/**
 * Get request to Tugg API
 * @param  {String} api path: i.e. 'titles', 'events'
 * @param  {Function} callback function
 * @return {void}
 */
TuggApi.prototype._get = function(path, cb) {
  var options = {
    headers: {'TUGG-API-KEY': this.config.api_key},
    hostname: this.config.hostname,
    port: this.config.port,
    path: '/api/' + path + '?format=' + this.config.format
  };

  req = https.request(options, function(res) {
    var data = [];
    res
    .on('data', function(chunk) { data.push(chunk); })
    .on('end', function() {
      data = data.join('').trim();
      var result;
      try {
        result = JSON.parse(data);
      } catch (exp) {
        result = {'status_code': 500, 'status_text': 'JSON Parse Failed'};
      }
      cb(null, result);
    });
  })
  req.end();

  req.on('error', function(e) {
    cb(e);
  });
};

module.exports = TuggApi;