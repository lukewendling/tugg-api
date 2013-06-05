/* jslint node: true, indent: 2 */
"use strict";

/**
 * misc. helper functions
 */

var apiHelper = {

  // Tugg api returns top-level namespace: {event: {url: ..., name: ...}}
  // Clean it up here.
  trimNamespace: function (type, api_object) {
    return api_object[type];
  }

};

module.exports = apiHelper;