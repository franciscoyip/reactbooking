var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var {Offer} = require('Offer');

describe('Offer', function(){
  it('should exist', function(){
    expect(Offer).toExist();
  });


  it('should dispatch SELECT_OFFER action with id on click', function(){
    var offerData = {
       "image_url": "https://www.norone.com/nor1images/h-008/000153/small/00001728.jpg",
       "short_desc": "Premier Suite with Lanai Access",
       "long_desc": "Enjoy this large open floor plan with dining area, living area including pullout sleeper sofa with attached King bedroom, wet bar, and refrigerator, featuring floor to ceiling windows with sliding glass door opening directly to a Sun Deck, ideal for meeting planners, executives or families looking for extra space.",
       "item_id": 102,
       "room_code": "SUITE",
       "price": "$30 extra per night",
       "fee":30,
       "tag":"best value",
       selected: false
    };
    var spy = expect.createSpy();
    var offer = TestUtils.renderIntoDocument(<Offer {...offerData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(offer));

    TestUtils.Simulate.click($el.find('.button').get(0));
    expect(spy).toHaveBeenCalledWith({
      type:'SELECT_OFFER',
      item_id: 102
    });

  });

});
