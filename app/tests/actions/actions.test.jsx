var expect = require('expect');
var actions = require('../../actions/actions');

describe('Actions', function(){
  it('should exist', function(){
    expect(actions).toExist();
  });

  it('should generate set guest action', function(){
      var guest = {
        price: "50",
        code: "QUEEN"
      };

      var action = {
        type: 'SET_GUEST',
        guest:{
          price: 50,
          code: "QUEEN"
        }
      };

      var resultAction = actions.setGuest(guest);
      expect(resultAction).toEqual(action);
  });

  it('should generate add rooms action', function(){

      var rooms = [
        {
          room_code: 'QUEEN',
          item_id: 100,
          fee: 20,
          selected: false
        },
        {
          room_code: 'KING',
          item_id: 101,
          fee: 25,
          selected: false
        },
        {
          room_code: 'SUITE',
          item_id: 102,
          fee: 30,
          selected: false
        },
        {
          item_id: 103,
          fee: 50,
          selected: false
        }
      ];

      var action = {
        type: 'SET_ROOMS',
        rooms
      };

      var resultAction = actions.addRooms(rooms);
      expect(resultAction).toEqual(action);
  });

  it('should generate select offer action', function(){
      var action = {
        type: 'SELECT_OFFER',
        item_id: 101
      };

      var resultAction = actions.selectOffer(action.item_id);
      expect(resultAction).toEqual(action);
  });

  it('should generate set summary action', function(){
      let summary = {
        code: 'KING',
        cost: 0,
        servicefee: 0,
        subtotal: 0
      };

      let action = {
        type: 'SET_SUMMARY',
        summary
      };

      let resultAction = actions.setSummary(action.summary);
      expect(resultAction).toEqual(action);
  });

});
