import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

import GuestInformation from 'GuestInformation';
import RoomInformation from 'RoomInformation';
import Offers from 'Offers';

import BookingAPI from 'BookingAPI';

class Reservation extends Component {

  componentWillMount(){
    this.props.setGuest(this.props.location.query);
    this.props.queryRooms();
  }

  handleConfirm(e) {
    e.preventDefault();

    let {guest, rooms, setSummary, submitConfirmation} = this.props;

    //dispatch Confirmation
    let summary = BookingAPI.getSummary(rooms, guest);
    setSummary(summary);
    submitConfirmation();
    //route to confirmation page
    this.context.router.push({
      pathname:'/confirmation'
    });
  }

  render(){

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
            <button className="button" onClick={this.handleConfirm.bind(this)}>Confirm</button>
            </div>
          </div>

          <div>
              <i className="fi-asterisk"></i> User can only select one room upgrade offer and the champagne service if offered.
          </div>
        </div>

      </div>
    );
  }

}

Reservation.contextTypes = {
  router: React.PropTypes.object
};

var mapStateToProps = (state)=>{
  return {
    guest: state.model.guest,
    rooms: state.model.rooms
  }
};

export default connect(mapStateToProps, actions)(Reservation);
