import React from 'react';
import { Router, browserHistory } from 'react-router';
import Layout from './components/layout/LayoutProvider';
import Home from './components/home/Home';
import Login from './components/login/LoginProvider';
import NotFound from './components/not-found';
import Customers from './components/customers';
import requireAuth from './components/utils/requireAuth';
import notAuthed from './components/utils/notAuthed';

const Routes = () => {
  const rootRoute = {
    childRoutes: [{
      path: '/login',
      component: notAuthed(Login),
    }, {
      path: '/',
      component: requireAuth(Layout),
      indexRoute: { component: Home },
      childRoutes: [
        Customers,
        NotFound,
      ],
    }],
  };

  return (
    <Router
      history={browserHistory}
      routes={rootRoute}
    />
  );
};

export default Routes;
