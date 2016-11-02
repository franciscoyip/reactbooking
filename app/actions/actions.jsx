var axios = require('axios');

var setGuest = (guest) => {
  guest.price = Number(guest.price);
  return {
    type: 'SET_GUEST',
    guest //eq to ES5 guest:guest
  }
};

var addRooms = (rooms)=>{
  return {
    type: 'SET_ROOMS',
    rooms
  };
}

var selectOffer = (item_id)=>{
  return {
    type: 'SELECT_OFFER',
    item_id
  };
}

var queryRooms = ()=>{

  let url = "/data/data.json";

  return (dispatch, getState) =>{

    function success(res){
      dispatch(addRooms(res.data));
      dispatch(setBookedRoomCode(getState().model.guest.code));
    };

    function failed(res){
      console.log('Something went wrong');
    }

    return axios.get(url).then(success).catch(failed);
  };
};

var setSummary = (summary)=>{
  return {
    type: 'SET_SUMMARY',
    summary
  }
};

module.exports = {
  setGuest,
  queryRooms,
  addRooms,
  selectOffer,
  setSummary
}
