module.exports = {
  getBookedRoom: (rooms, guest)=>{
    if(guest.code && rooms.length > 0){
      return rooms.find((room)=>{
        return room.room_code === guest.code;
      });
    }
    return null;
  },
  //Return the upgraded room if user selected upgrade
  getUpgradedRoom: (rooms, guest)=>{
    var selected = rooms.find((room)=>{
      return room.item_id < 103 && room.selected;
    });

    if(selected){
      return selected;
    }else{
      return rooms.find((room)=>{
        return room.room_code === guest.code;
      });
    }
  },
  getOffers: (rooms, item_id, price)=>{
    return rooms.filter((room)=>{
      if(room.item_id !== 103){
        return room.item_id > item_id;
      }else {
        return (price >= 199);
      }
    });
  },
  getSummary: (rooms, guest)=>{

    var selected = null;
    var service = null;
    for (let ii = 0; ii < rooms.length; ii++) {
      let room = rooms[ii];
      if(room.item_id < 103 && room.selected){
        selected = room;
      }
      if(room.item_id === 103 && room.selected){
        service = room;
      }
      if(selected && service){
        break;
      }
    }

    var selected = rooms.find((room)=>{
      return room.item_id < 103 && room.selected;
    });

    var code = selected ? selected.room_code : guest.code;
    var roomcost = selected ? selected.fee + guest.price : guest.price;
    var servicefee = service ? service.fee : 0;
    var service = service ? service.short_desc : 'N/A';
    var total = roomcost + servicefee;

    return {
      code,
      roomcost,
      servicefee,
      service,
      total
    };
  }
};
