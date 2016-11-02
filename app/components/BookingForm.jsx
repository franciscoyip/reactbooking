var React = require('react');
var {connect} = require('react-redux');

import ErrorModal from 'ErrorModal';

//Rules for form validation
const validate = function(form){
  var errors = {};

  var values = {};
  Array.from(form).forEach((field)=>{
    if(field.required){
      values[field.name] = field.value;
    }
  });

  if (!values.first) {
    errors.first = 'Required'
  }

  if (!values.last) {
    errors.last = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.code) {
    errors.code = 'Required'
  }

  if (!values.price) {
    errors.price = 'Required'
  }

  return errors;
};

export var BookingForm = React.createClass({

  //Usually the state should be maintained by the Store.
  //But for this simple form, the state is being maintained in this component.
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function(){
    return {
      errorMessage: null
    };
  },

  onSubmit: function(e){
    e.preventDefault();

    this.setState({
      errorMessage: null
    });

    let errors = validate(this.refs.form);
    let msg = [];

    if( Object.keys(errors).length > 0 ){
      this.setState({
        errorMessage: "Please fill in all the required fields and make sure email is valid!"
      });
    }else{
      this.context.router.push({
        pathname:'/reserved',
        query: Array.from(this.refs.form).reduce((values, field)=>{
          if(field.value){
            values[field.name] = field.value;
          }
          return values;
        },{})
      });
    }
  },

  render: function(){

    var {errorMessage} = this.state;

    function renderError(){
      if(errorMessage !== null){
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div className="small-11 small-centered medium-8 medium-centered large-6 large-centered columns">
        <div className="container">
          <h1 className="page-title">Guest Information</h1>
          <form className="booking-form" ref="form" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="medium-6 columns">
                <label><i className="fi-info"></i> First Name <span>*</span>
                  <input type="text" placeholder="John" name="first" required/>
                </label>
              </div>
              <div className="medium-6 columns">
                <label><i className="fi-info"></i> Last Name <span>*</span>
                  <input type="text" placeholder="Doe" name="last" required/>
                </label>
              </div>
            </div>
            <label>
              <i className="fi-mail"></i> Email <span>*</span>
              <input type="email" placeholder="yourname@domain.com" name="email" required/>
            </label>
            <label>
              <i className="fi-info"></i> Room Code <span>*</span>
                <select name="code" required>
                  <option value="QUEEN">QUEEN</option>
                  <option value="KING">KING</option>
                  <option value="SUITE">SUITE</option>
                </select>
            </label>
            <label>
              <i className="fi-info"></i> Room Price <span>*</span>
                <select name="price" required>
                  <option value="50">$50</option>
                  <option value="100">$100</option>
                  <option value="149">$149</option>
                  <option value="199">$199</option>
                  <option value="205">$205</option>
                </select>
            </label>
            <button type="submit" className="button expanded">Reserve</button>
          </form>
          <div>
              <i className="fi-asterisk"></i> Required
              <div>This form is included for entering parameters in URL for the next view</div>
          </div>
          {renderError()}
        </div>
      </div>
    );
  }
});

export default connect()(BookingForm);
