import React from 'react';

var Summary = React.createClass({
  render: function(){
    const {code, roomcost, servicefee, service, total} = this.props;

    return (
      <div className="summary clearfix">
        <hr/>
        <div className="column-5 float-right">
        <table>
          <thead>
            <tr>
              <th colSpan="2">Summary of Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Room</td>
              <td>{code}</td>
            </tr>
            <tr>
              <td>Service</td>
              <td>{service}</td>
            </tr>
            <tr>
              <td>Room Cost</td>
              <td>${roomcost}</td>
            </tr>
            <tr>
              <td>Service Fee</td>
              <td>${servicefee}</td>
            </tr>
            <tr>
              <td>Room Subtotal</td>
              <td className="total">${total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    );
  }
});

module.exports = Summary;
