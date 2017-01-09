import React from 'react';
import { Router, browserHistory } from 'react-router';

import Home from './components/home';
import NotFound from './components/other';
import Customers from './components/customers';
import Orders from './components/orders';
import Products from './components/products';
import Vendors from './components/vendors';
import OrderItem from './components/order-item';
import Supplies from './components/supplies';

import Layout from './components/layout/LayoutProvider';
import Login from './components/auth/LoginProvider';
import requireAuth from './components/utils/requireAuth';
import notAuthed from './components/utils/notAuthed';

const Routes = () => {
  const rootRoute = {
    childRoutes: [{
      path: '/login',
      component: notAuthed(Login),
    }, {
      path: '',
      component: requireAuth(Layout),
      childRoutes: [
        Home,
        Customers,
        Orders,
        Products,
        OrderItem,
        Vendors,
        Supplies,
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
