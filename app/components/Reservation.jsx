import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';

import GuestInformation from 'GuestInformation';
import RoomInformation from 'RoomInformation';
import Offers from 'Offers';

import BookingAPI from 'BookingAPI';

export var Reservation = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  componentDidMount: function(){
    var {dispatch} = this.props;

    dispatch(actions.setGuest(this.props.location.query));
    dispatch(actions.queryRooms());
  },
  handleConfirm: function(e){
    e.preventDefault();

    let {guest, rooms, dispatch} = this.props;

    //dispatch Confirmation
    let summary = BookingAPI.getSummary(rooms, guest);
    dispatch( actions.setSummary(summary) );

    //route to confirmation page
    this.context.router.push({
      pathname:'/confirmation'
    });
  },
  render: function(){

    let {guest, rooms, dispatch} = this.props;
    let offers = [];
    let bookedroom = BookingAPI.getBookedRoom(rooms, guest);
    if(bookedroom){
      offers = BookingAPI.getOffers(rooms, bookedroom.item_id, guest.price);
    }

    return (
      <div className="small-11 small-centered medium-9 medium-centered large-8 large-centered columns">
        <div className="container">
          <h1 className="page-title-thick">Your Booking with NorOne</h1>
          <div className="details">
            <GuestInformation {...guest}/>
            <RoomInformation {...bookedroom}/>
            <Offers offers={offers}/>
            <div className="confirm-wrap">
            <button className="button" onClick={this.handleConfirm}>Confirm</button>
            </div>
          </div>

          <div>
              <i className="fi-asterisk"></i> User can only select one room upgrade offer and the champagne service if offered.
          </div>
        </div>

      </div>
    );
  }
});

var mapStateToProps = (state)=>{
  return {
    guest: state.model.guest,
    rooms: state.model.rooms
  }
};

export default connect(mapStateToProps)(Reservation);
