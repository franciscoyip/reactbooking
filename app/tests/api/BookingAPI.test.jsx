var React = require('react');

var expect = require('expect');

var TestUtils = require('react-addons-test-utils');

var BookingAPI = require('BookingAPI');

describe('BookingAPI', function(){

  it('should exist', function(){
    expect(BookingAPI).toExist();
  });

  var rooms = null;
  var guest = null;

  beforeEach(function() {
    rooms = [
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

    guest = {
      price: 50,
      code: 'QUEEN'
    }

  });

  describe('getBookedRoom', function(){
    it('should get the correct booked room', function(){
      var bookedroom = BookingAPI.getBookedRoom(rooms, guest);
      expect(bookedroom).toBe(rooms[0]);
    });
  });

  describe('getUpgradedRoom', function(){

    it('should get the booked room if no upgrade selected', function(){
      var bookedroom = BookingAPI.getUpgradedRoom(rooms, guest);
      expect(bookedroom).toBe(rooms[0]);
    });

    it('should get the correct upgraded room', function(){
      rooms[2].selected = true;
      var bookedroom = BookingAPI.getUpgradedRoom(rooms, guest);
      expect(bookedroom).toBe(rooms[2]);
    });
  });

  describe('getOffers', function(){

    it('should get offers with KING and SUITE for room upgrade if QUEEN is booked', function(){
      var offers = BookingAPI.getOffers(rooms, rooms[0].item_id, guest);
      var king = offers.find((room)=>{
        return room.room_code === 'KING';
      });
      var suite = offers.find((room)=>{
        return room.room_code === 'SUITE';
      });
      expect(king).toBe(rooms[1]);
      expect(suite).toBe(rooms[2]);
    });

    it('should not offers service offer 103 room upgrade if price is lower than 199', function(){

      var offers = BookingAPI.getOffers(rooms, rooms[0].item_id, 198);
      var service = offers.find((offer)=>{
        return offer.item_id === '103';
      });
      expect(service).toBe(undefined);
    });

    it('should get offers service offer 103 room upgrade if price is more than or equal to 199', function(){

      var offers = BookingAPI.getOffers(rooms, rooms[0].item_id, 199);

      var service = offers.find((offer)=>{
        return offer.item_id === 103;
      });
      expect(service).toBe(rooms[3]);
    });

    it('should get the correct upgraded room', function(){
      rooms[2].selected = true;
      var bookedroom = BookingAPI.getUpgradedRoom(rooms, guest);
      expect(bookedroom).toBe(rooms[2]);
    });
  });



  describe('getSummary', function(){

    it('should getSummary properly with no offer selected', function(){

      var summary = BookingAPI.getSummary(rooms, guest);

      expect(summary.code).toBe(guest.code);
      expect(summary.roomcost).toBe(guest.price);
      expect(summary.servicefee).toBe(0);
      expect(summary.total).toBe(guest.price);
    });

    it('should getSummary properly with room offer is selected', function(){

      //select king from offer
      rooms[1].selected = true;
      var summary = BookingAPI.getSummary(rooms, guest);

      expect(summary.code).toBe(rooms[1].room_code);
      expect(summary.roomcost).toBe(guest.price + rooms[1].fee);
      expect(summary.servicefee).toBe(0);
      expect(summary.total).toBe(guest.price + rooms[1].fee);
    });


    it('should getSummary properly with room offer and service are selected', function(){

      //select king from offer
      rooms[1].selected = true;
      rooms[3].selected = true;
      var summary = BookingAPI.getSummary(rooms, guest);

      expect(summary.code).toBe(rooms[1].room_code);
      expect(summary.roomcost).toBe(guest.price + rooms[1].fee);
      expect(summary.servicefee).toBe(rooms[3].fee);
      expect(summary.total).toBe(guest.price + rooms[1].fee + rooms[3].fee);
    });

  });
});
