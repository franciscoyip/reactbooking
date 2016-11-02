var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var {Reservation} = require('Reservation');

describe('Reservation', function(){
  it('should exist', function(){
    expect(Reservation).toExist();
  });
});
