import React from 'react';
import { Router, browserHistory } from 'react-router';
import Layout from './components/layout/LayoutProvider';
import Home from './components/home';
import Login from './components/login';
import NotFound from './components/not-found';

const Routes = () => {
  const rootRoute = {
    component: Layout,
    childRoutes: [
      Home,
      Login,
      NotFound,
    ],
  };

  return (
    <Router
      history={browserHistory}
      routes={rootRoute}
    />
  );
};

export default Routes;
