import React from 'react';

import Offer from 'Offer';

export var Offers = React.createClass({

  render: function(){

    var {offers} = this.props;

    var renderOffers = ()=>{
      return offers.map((offer)=>{
        return (<Offer {...offer} key={offer.item_id}/>);
      });
    };

    var renderWrapper = function(){
      if(offers.length > 0){
        return (
          <div className="offer-wrap">
          <h4>Take your stay to the next level!</h4>
          <div className="offers">
            <ul>
              {renderOffers()}
            </ul>
          </div>
          </div>
        );
      }
    }

    return (
      <div>
      {renderWrapper()}
      </div>
    );
  }
});

export default Offers;
