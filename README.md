# tugg-api - Tugg API node module [![Build Status](https://travis-ci.org/lukewendling/tugg-api.png)](https://travis-ci.org/lukewendling/tugg-api)

> Access the [Tugg](http://www.tugg.com/api) API with [Nodejs](http://nodejs.org).


## Installation

To install via NPM type the following: `npm install tugg-api`

You can also install via git by cloning:

```shell
git clone https://github.com/lukewendling/tugg-api.git /path/to/project`
```

## Usage

```js
var TuggApi = require('./index');
var helper = require('./lib/api_helper');

var tugg = new TuggApi(API_KEY);

tugg.event(TUGG_EVENT_ID, function(err, response) {
  var event = helper.trimNamespace('event', response);
  console.log(event);
});
```

## Current Features

This module is limited to the following API methods:

* events
* titles
* page_shares