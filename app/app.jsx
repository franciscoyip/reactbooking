import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Main from 'Main';
import BookingForm from 'BookingForm';
import Reservation from 'Reservation';
import Confirmation from 'Confirmation';

var store = require('configureStore').configure();

require('style!css!sass!applicationStyles');

//Load CSS Framework
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={BookingForm}></IndexRoute>
        <Route path="reserved" component={Reservation}></Route>
        <Route path="confirmation" component={Confirmation}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
