'use strict';

var should = require('should');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lens = require('../');

var CreditCard = new Schema({
  token: String,
  last4: String,
  expiry: String
});
CreditCard.plugin(lens, {
  token: ['admin'],
  last4: ['owner', 'admin'],
  expiry: ['owner', 'admin']
});

var UserSchema = new Schema({
  name: String,
  creditCards: [CreditCard],
  bff: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});
UserSchema.plugin(lens, {
  name: ['public', 'owner', 'admin'],
  creditCards: ['owner', 'admin'],
  bff: ['owner, admin']
});

var User = mongoose.model('User', UserSchema);

describe('mongoose-lens()', function() {
  var inst = new User({
    name: 'Todd Johnson',
    creditCards: [{
      token: '123',
      last4: '4567',
      expiry: '12/18'
    }]
  });

  it('should ignore fields with no lenses specified', function(done) {
    inst.lens(['public']).should.eql({
      name: 'Todd Johnson'
    });
    done();
  });
});
