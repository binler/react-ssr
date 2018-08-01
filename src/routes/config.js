import React from 'react';
import Loadable from 'react-loadable';
import {renderRoutes} from 'react-router-config';

import Loading from '../components/Loading';
import {getUser} from "../pages/User/user.actions";

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

/**
 *
 * @type {*[]}
 * actions must be an array, each item must be a function.
 * It's call to api that you want to pre-fetch on server side.
 */
const routesConfig = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/user/:id',
    component: User,
    exact: true,
    actions: [getUser],
    bindRouteParamsToAction: [true]
  }
];

const routes = renderRoutes(routesConfig);

export {
  routesConfig,
  routes
}