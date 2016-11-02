var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';

//actual Component
import ConnectedOffers, {Offers} from 'Offers';
import ConnectedOffer from 'Offer';

describe('Offers', ()=>{
  it('should exist', ()=>{
    expect(Offers).toExist();
  });

  let offers = [];
  let guest = {};

  beforeEach(()=>{
    offers = [
      {
         "image_url": "https://www.norone.com/nor1images/h-008/000153/small/00001701.jpg",
         "short_desc": "King Bed with Lanai Access",
         "long_desc": "King Bed with Lanai Access. Enjoy floor to ceiling windows with sliding glass door opening directly to a Sun Deck furnished with patio furniture for relaxing on the 5th floor during your stay.",
         "item_id": 101,
         "room_code": "KING",
         "price": "$25 extra per night",
         "fee":25,
         "tag": "great deal!"
      },
      {
         "image_url": "https://www.norone.com/nor1images/h-008/000153/small/00001728.jpg",
         "short_desc": "Premier Suite with Lanai Access",
         "long_desc": "Enjoy this large open floor plan with dining area, living area including pullout sleeper sofa with attached King bedroom, wet bar, and refrigerator, featuring floor to ceiling windows with sliding glass door opening directly to a Sun Deck, ideal for meeting planners, executives or families looking for extra space.",
         "item_id": 102,
         "room_code": "SUITE",
         "price": "$30 extra per night",
         "fee":30,
         "tag":"best value"
      },
      {
         "image_url": "https://www.norone.com/nor1images/h-026/000892/small/00011999.jpg",
         "short_desc": "Champagne and Strawberries",
         "long_desc": "Upon arrival, enjoy a combination of fresh strawberries and a bottle of chilled champagne from the comfort of your own guestroom.",
         "item_id": 103,
         "price": "$50 extra",
         "fee":50,
         "tag":"recommended!"
      }
    ];

    guest = {
      price: 1999,
      code: "QUEEN"
    };

  });

  it('should render one Offer Component for each offer item', ()=>{

    let store = configure({
      model: {
        rooms: offers,
        guest
      },
    });

    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedOffers offers={offers}/>
      </Provider>
    );

    let offerList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedOffers)[0];

    let offerComponents = TestUtils.scryRenderedComponentsWithType(offerList, ConnectedOffer);

    expect(offerComponents.length).toBe(offers.length);
  });

  it('should render no offer component if no offer item', ()=>{

    offers = [];

    let store = configure({
      model: {
        rooms: offers,
        guest
      },
    });

    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedOffers offers={offers}/>
      </Provider>
    );

    let offerList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedOffers)[0];

    let offerComponents = TestUtils.scryRenderedComponentsWithType(offerList, ConnectedOffer);

    expect(offerComponents.length).toBe(0);
  });


});
