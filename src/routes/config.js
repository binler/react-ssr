import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Loadable from 'react-loadable';

/**
 * This comment bellow is very important
 * it's magic between server side render and client render
 */

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ '../pages/Home'),
  loading: () => <div>loading...</div>,
  modules: ['home']
});
const User = Loadable({
  loader: () => import(/* webpackChunkName: "user" */ '../pages/User'),
  loading: () => <div>loading...</div>,
  modules: ['user']
});

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