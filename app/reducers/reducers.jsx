
let defaultSummaryState = {
  code: 'N/A',
  cost: 0,
  servicefee: 0,
  subtotal: 0
};

export var summaryReducer = (state=defaultSummaryState, action)=>{
  var type = action.type;

  switch (type) {
    case 'SET_SUMMARY':
      var newState = Object.assign({}, action.summary);
      return newState;
      //break;
    default:
      return state;
  }
}

let defaultState = {
  rooms: [],
  guest: {
    first: '',
    last: '',
    email:null
  }
};

export var roomReducer = (state=defaultState, action)=>{
  var type = action.type;

  switch (type) {
    case 'SET_GUEST':
      var newState = Object.assign({}, state);

      newState.guest = action.guest;

      return newState;
      //break;
    case 'SET_ROOMS':
      var newState = Object.assign({}, state);

      newState.rooms = action.rooms;

      return newState;
    case 'SET_BOOKED_ROOM_CODE':
      var newState = Object.assign({}, state);

      for (var i = 0; i < newState.rooms.length; i++) {
        if(newState.rooms[i].room_code === action.code){
          newState.rooms[i].booked = true;
          break;
        }
      }

      return newState;
    case 'SELECT_OFFER':
      var newState = Object.assign({}, state);

      newState.rooms = newState.rooms.map((room)=>{
        var room_item_id = room.item_id;
        if(room_item_id === action.item_id){
          room.selected = room.selected ? false : true;
        }else if(room_item_id < 103 && action.item_id !== 103){
          room.selected = false;
        }
        return room;
      });

      return newState;
    default:
      return state;
  }
}
