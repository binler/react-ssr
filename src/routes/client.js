import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import {routes} from "./config";
import {store} from "../redux/store";

class ClientRouter extends React.Component {
  render() {
    const reduxStore = store();
    return (
      <Provider store={reduxStore.configureStore()}>
        <ConnectedRouter history={reduxStore.history}>
          <Router>
            {routes}
          </Router>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default ClientRouter;