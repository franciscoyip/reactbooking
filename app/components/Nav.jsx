var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text company"><img src="./img/company.png" alt="Nor1 Booking App"/></li>
            <li><IndexLink to="/" activeClassName="active-link">Booking</IndexLink></li>

          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Done by Francisco Yip</li>
            <li className="menu-text icon-wrap"><div className="icon"><img src="./img/logo.jpg"/></div></li>
          </ul>
        </div>
      </div>
    );
};
//<!--<li><Link to="/schedule" activeClassName="active-link">My Schedule</Link></li>-->
module.exports = Nav;
