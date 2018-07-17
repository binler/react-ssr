import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from "../pages/Home";
import User from "../pages/User";

const routesConfig = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/user',
    component: User,
    exact: true,
  }
];

const routes = (
  <Switch>
    {routesConfig.map(({path, component, exact}, index) => (
      <Route
        key={index}
        path={path}
        component={component}
        exact={exact}
      />
    ))}
  </Switch>
);

export {
  routesConfig,
  routes
}