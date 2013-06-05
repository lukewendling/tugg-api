/* jslint node: true, indent: 2 */
"use strict";

/**
 * tugg-api - A node module for the Tugg API
 * Reference http://www.tugg.com/api
 */

var url = require('url');
var http;

/**
 * The TuggApi constructor
 * @param {String} api_key
 * @param {Object} config options
 */
var TuggApi = function (api_key, opts) {
  if (opts === undefined || opts === null) {
    opts = {};
  }

  this.api_key = api_key;

  var config;

  config = {
    version: opts.version || '1',
    format: opts.format || 'json',
    hostname: opts.hostname || 'www.tugg.com',
    port: opts.port || 443
  };

  if (config.port === 443) {
    http = require('https');
  } else {
    http = require('http');
  }

  this.config = config;

  return this;
};

/**
 * Fetch a Tugg title by id
 * @param  {Integer} Title id
 * @param  {Function} callback function
 * @return {void}
 */
TuggApi.prototype.title = function (id, cb) {
  var path = 'titles/' + id.toString();
  this.get(path, {}, cb);
};

/**
 * Fetch a Tugg event by id
 * @param  {Integer} Event id
 * @param  {Function} callback function
 * @return {void}
 */
TuggApi.prototype.event = function (id, cb) {
  var path = 'events/' + id.toString();
  this.get(path, {}, cb);
};

/**
 * Fetch Tugg page shares by params
 * @param  {Object} params
 * @param  {Function} callback function
 * @return {void}
 */
TuggApi.prototype.page_shares = function (params, cb) {
  var path = 'shares/';
  this.get(path, params, cb);
};

/**
 * Get request to Tugg API
 * @param  {String} api path: i.e. 'titles', 'events'
 * @param  {Function} callback function
 * @return {void}
 */
TuggApi.prototype.get = function (path, params, cb) {
  var req, path_parts, options;
  params.format = this.config.format;

  path_parts = {
    pathname: '/api/' + path,
    query: params
  };

  options = {
    headers: {'TUGG-API-KEY': this.api_key, 'TUGG-API-VERSION': this.config.version},
    hostname: this.config.hostname,
    port: this.config.port,
    path: url.format(path_parts)
  };

  req = http.request(options, function (res) {
    var data = [];
    res
      .on('data', function (chunk) { data.push(chunk); })
      .on('end', function () {
        data = data.join('').trim();
        var result;
        try {
          result = JSON.parse(data);
        } catch (exp) {
          result = {'status_code': 500, 'status_text': 'JSON Parse Failed'};
        }
        cb(null, result);
      });
  });
  req.end();

  req.on('error', function (e) {
    cb(e);
  });
};

module.exports = TuggApi;