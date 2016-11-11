var axios = require('axios');

export function setGuest(guest) {
  guest.price = Number(guest.price);
  return {
    type: 'SET_GUEST',
    guest //eq to ES5 guest:guest
  }
};

export function addRooms(rooms){
  return {
    type: 'SET_ROOMS',
    rooms
  };
}

export var selectOffer = (item_id)=>{
  return {
    type: 'SELECT_OFFER',
    item_id
  };
}

export var queryRooms = ()=>{

  let url = "/rooms";

  return (dispatch, getState) =>{

    function success(res){
      dispatch(addRooms(res.data));
      dispatch(setBookedRoomCode(getState().model.guest.code));
    };

    function failed(res){
      //console.log('Something went wrong');
    }

    return axios.get(url).then(success).catch(failed);
  };
};

export var setSummary = (summary)=>{
  return {
    type: 'SET_SUMMARY',
    summary
  }
};

export var submitConfirmation = ()=>{
  let url = "/api/confirmation";

  return (dispatch, getState)=>{
    let {summary, model} = getState();
    let data = {
      summary,
      guest: model.guest
    }

    function success(res){
      console.log('Success');
    };

    function failed(res){
      console.log('API not found');
    }

    return axios.post(url, data).then(success).catch(failed);
  };
};
