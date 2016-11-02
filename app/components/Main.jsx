import React from 'react';
import Nav from 'Nav';

var Main = React.createClass({
   render: function(){
    return (
      <div className="wrapper" style={{backgroundImage: "url('./img/background.jpg')"}}>
        <Nav/>
        <div className="row overlay">
          {this.props.children}
        </div>

      </div>
    );
    },
});

module.exports = Main;
