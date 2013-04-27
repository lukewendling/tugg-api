tugg-api - Tugg API node module
====================

Access the [Tugg](http://www.tugg.com/api) API with [Nodejs](http://nodejs.org).

Installation
------------
To install via NPM type the following: `npm install tugg-api`

You can also install via git by cloning: `git clone https://github.com/lukewendling/tugg-api.git /path/to/project`

Usage
-----
    var TuggApi = require('./index');
    var helper = require('./lib/api_helper');

    var tugg = new TuggApi({api_key: API_KEY});

    tugg.event(TUGG_EVENT_ID, function(err, res) {
      var event = helper.parseJSONResponse('event', res);
      console.log(event);
    });

Current Features
---------------
This module is limited to the following API methods:

* events
* titles