import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function mapLinks(links) {
  return links.map((link) => (
    <Link
      to={link.to}
      key={link.to}
      className="nav-link nav-item"
      activeClassName="active"
    >
      {link.label}
    </Link>
  ));
}

const NavigationBar = ({ user, logout }) => {
  const userRoutes = [
    { to: '/', label: 'Home' },
    { to: '/customers', label: 'Customers' },
    { to: '/orders', label: 'Orders' },
    { to: '/products', label: 'Products' },
    { to: '/vendors', label: 'Vendors' },
    { to: '/users', label: 'users' },
  ];

  const guestRoutes = [];

  return (
    <div>
      <div className="row">
        <nav className="navbar navbar-light bg-faded">
          <div className="nav navbar-nav">
            {user.isAuthenticated === true
              ? mapLinks(userRoutes)
              : mapLinks(guestRoutes)
            }
            <div className="pull-xs-right">
              {user.isAuthenticated === true
                ? <button className="btn btn-secondary" onClick={logout}>Logout</button>
                : <Link to="/login"><button className="btn btn-secondary">Login</button></Link>
              }
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavigationBar;
