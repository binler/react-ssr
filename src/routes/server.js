import React from 'react';
import {StaticRouter as Router} from 'react-router-dom';

import {routes} from "./config";

export default ({location, context}) => (
  <Router
    location={location}
    context={context}
  >
    {routes}
  </Router>
);