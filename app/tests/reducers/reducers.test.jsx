var expect = require('expect');
import {roomReducer} from 'reducers';

describe('Reducers', function(){

  describe('roomReducer', ()=>{

    let rooms = null;
    let guest = null;

    beforeEach(function() {
      rooms = [
        {
          room_code: 'QUEEN',
          item_id: 100,
          fee: 20,
          selected: false,
          booked: false
        },
        {
          room_code: 'KING',
          item_id: 101,
          fee: 25,
          selected: false,
          booked: false
        },
        {
          room_code: 'SUITE',
          item_id: 102,
          fee: 30,
          selected: false,
          booked: false
        },
        {
          item_id: 103,
          fee: 50,
          selected: false
        }
      ];

      guest = {
        price: 50,
        code: 'QUEEN'
      }

    });

    it('should set guest information', ()=>{

      const state = {
        guest,
        rooms
      }

      const action = {
        type: 'SET_GUEST',
        guest:{
          price: 199,
          code: 'KING'
        }
      };

      var response = roomReducer(state, action);
      expect(response.guest).toEqual(action.guest);
    });

    it('should set rooms information', ()=>{

      const state = {
        guest,
        rooms: []
      }

      const action = {
        type: 'SET_ROOMS',
        guest:{
          price: 199,
          code: 'KING'
        },
        rooms
      };

      var response = roomReducer(state, action);
      expect(response.rooms).toEqual(action.rooms);
    });

    it('should set the booked room with provided code', ()=>{

      const state = {
        guest,
        rooms
      }

      const action = {
        type: 'SET_BOOKED_ROOM_CODE',
        code: 'KING'
      };

      rooms[1].booked = true;

      var response = roomReducer(state, action);
      let bookedroom = response.rooms.find((room)=>{
        return room.room_code === action.code;
      });
      expect(bookedroom.room_code).toEqual(action.code);
    });

    it('should set select offer with the item_id provided', ()=>{

      const state = {
        guest,
        rooms
      }

      const action = {
        type: 'SELECT_OFFER',
        item_id: 102
      };

      var response = roomReducer(state, action);
      let selectedroom = response.rooms.find((room)=>{
        return room.selected === true;
      });
      expect(selectedroom.item_id).toBe(action.item_id);
    });

    it('should only select one room offer with the item_id provided', ()=>{

      const state = {
        guest,
        rooms
      }

      rooms[0].selected = true;
      rooms[1].selected = true;

      const action = {
        type: 'SELECT_OFFER',
        item_id: 102
      };

      var response = roomReducer(state, action);
      let selectedrooms = response.rooms.filter((room)=>{
        return room.selected === true;
      });
      expect(selectedrooms.length).toBe(1);
      expect(selectedrooms[0]).toEqual(rooms[2]);
    });

    it('should toggle room offer with the item_id provided', ()=>{

      rooms[2].selected = false;

      const state = {
        guest,
        rooms
      }

      const action = {
        type: 'SELECT_OFFER',
        item_id: 102
      };

      var response = roomReducer(state, action);
      let suite_room = response.rooms.find((room)=>{
        return room.item_id === action.item_id;
      });
      expect(suite_room.selected).toBe(true);
    });

    it('should allow multiple offers to be selected', ()=>{

      rooms[2].selected = false;

      const state = {
        guest,
        rooms
      }

      const action = {
        type: 'SELECT_OFFER',
        item_id: 102
      };

      var response = roomReducer(state, action);
      let suite_room = response.rooms.find((room)=>{
        return room.item_id === action.item_id;
      });
      expect(suite_room.selected).toBe(true);
    });

  });

});
