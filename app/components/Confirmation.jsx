import React from 'react';
import {connect} from 'react-redux';

import GuestInformation from 'GuestInformation';
import RoomInformation from 'RoomInformation';
import Summary from 'Summary';
import Offers from 'Offers';

import BookingAPI from 'BookingAPI';

export var Confirmation = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  render: function(){

    var {guest, rooms, summary} = this.props;
    var bookedroom = BookingAPI.getUpgradedRoom(rooms, guest);

    return (
      <div className="small-11 small-centered medium-8 medium-centered large-8 large-centered columns">
        <div className="container">
          <h1 className="page-title-thick">Confirmation for booking with NorOne</h1>
          <div className="details">
            <GuestInformation {...guest}/>
            <RoomInformation {...bookedroom}/>
            <Summary {...summary} />
          </div>
          <div><i className="fi-asterisk"></i> This page view is designed to route to main page on refresh.</div>
        </div>
      </div>
    );
  }
});

var mapStateToProps = (state)=>{
  return {
    guest: state.model.guest,
    rooms: state.model.rooms,
    summary: state.summary
  }
};

export default connect(mapStateToProps)(Confirmation);
