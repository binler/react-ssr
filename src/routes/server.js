import React from 'react';
import {StaticRouter as Router} from 'react-router-dom';

import {routes} from "./config";

class ServerRouter extends React.Component {
  render() {
    const {location} = this.props;
    return (
      <Router
        location={location}
        context={{}}
      >
        {routes}
      </Router>
    );
  }
}

export default ServerRouter;