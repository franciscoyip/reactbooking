import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

export var Offer = React.createClass({

  selectOffer: function(item_id){
    this.props.selectOffer(item_id);
  },
  render: function(){

    let {item_id, image_url, tag, short_desc, long_desc, price, selected} = this.props;

    return (
          <li className="clearfix">
            <div className="column-3 float-left">
              <img src={image_url}/>
              <div className="tag">{tag}</div>
            </div>
            <div className="column-5 float-left">
              <div className="content">
                <h4 className="short_desc">{short_desc}</h4>
                <div className="long_desc">
                <p>
                  {long_desc}
                </p>
                </div>
                <div className="price-area-items">
                  <div className="price">{price}</div>
                  <button type="button" className="expanded button" onClick={(e)=>{
                      e.preventDefault();
                      this.selectOffer(item_id);
                  }}>{selected ? 'Selected' : 'Choose'}</button>
                </div>
              </div>
            </div>
          </li>
    );
  }

});

export default connect(null, actions)(Offer);
