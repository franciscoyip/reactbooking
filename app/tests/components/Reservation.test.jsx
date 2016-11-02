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

  /*
  it('should dispatch ADD_TODO prop with valid string', function(){
    var strTodo = 'walk the walk';
    var action = {
      type: 'ADD_TODO',
      text: strTodo
    };
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.inputTodo.value = strTodo;
    TestUtils.Simulate.submit($el.find('form').get(0));

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO with invalid string', function(){
    var strTodo = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.inputTodo.value = strTodo;
    TestUtils.Simulate.submit($el.find('form').get(0));

    expect(spy).toNotHaveBeenCalled();
  });
  */
});
