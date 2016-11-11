import React from 'react';

var GuestInformation = React.createClass({
  render: function(){

    const {first, last, email} = this.props;

    return (
      <div className="guest">
        <div className="name">{first} {last}</div>
        <a href={'mailto:'+ email }>{email}</a>
      </div>
    );
  }
});

module.exports = GuestInformation;
