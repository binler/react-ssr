import React from 'react';
import Loadable from 'react-loadable';
import {renderRoutes} from 'react-router-config';

import Loading from '../components/Loading';

/**
 * This comment bellow is very important
 * it's magic between server side render and client render
 */

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ '../pages/Home/index'),
  loading: () => <Loading />,
  modules: ['home']
});
const User = Loadable({
  loader: () => import(/* webpackChunkName: "user" */ '../pages/User/index'),
  loading: () => <Loading />,
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

const routes = renderRoutes(routesConfig);

export {
  routesConfig,
  routes
}