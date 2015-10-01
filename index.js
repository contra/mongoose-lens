'use strict';

var lens = require('object-lens');
var toArray = require('to-array');
var clone = require('lodash.clone');
var mongoose = require('mongoose');

module.exports = function(schema, opt) {
  var acl = clone(opt);
  console.log(schema);
  schema.eachPath(function(k, type){
    // embedded docs
    if (type.schema && type.schema._acl) {
      acl[k] = type.schema._acl;
      return;
    }

    // dbrefs
    if (type.options && type.options.ref) {
      // TODO: look up model and acl
    }
  });

  schema._acl = acl;

  schema.methods.lens = function() {
    var lenses = toArray(arguments);
    return lens(schema._acl, lenses, this.toJSON());
  };
};
