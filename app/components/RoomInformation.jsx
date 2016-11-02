import React from 'react';

var RoomInformation = React.createClass({
  render: function(){
    var {item_id, room_code, image_url, short_desc, long_desc} = this.props;

    return (
      <div className="room clearfix">
        <div className="column-3 float-left">
          <img src={image_url}/>
        </div>
        <div className="column-5 float-left">
          <div className="content">
            <h4 className="short_desc">{short_desc}</h4>
            <p className="long_desc">
              {long_desc}
            </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = RoomInformation;
