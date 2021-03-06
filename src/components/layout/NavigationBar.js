import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import classnames from 'classnames';
import userIcon from '../../../public/img/user-male-icon.png';

class NavigationBar extends Component {
  mapLinks(links) {
    return links.map((link) => (
      <li key={link.to} className={classnames({ active: this.props.router.isActive(link.to) })}>
        <Link
          to={link.to}
          key={link.to}
          className="nav-link nav-item"
          activeClassName="active"
        >
          <i className={`fa fa-${link.icon}`} />{link.label}
        </Link>
      </li>
    ));
  }

  render() {
    const userRoutes = [
      { to: '/', label: 'Home', icon: 'home' },
      { to: '/Customers', label: 'Customers', icon: 'user' },
      { to: '/Orders', label: 'Orders', icon: 'ticket' },
      { to: '/Products', label: 'Products', icon: 'leaf' },
      { to: '/Vendors', label: 'Vendors', icon: 'truck' },
    ];

    const { auth, logout } = this.props;

    if (!auth.isAuthenticated) return null;
    return (
      <aside className="main-sidebar" style={{ paddingTop: '0px' }}>
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src={userIcon} className="img-circle" role="presentation" />
            </div>
            <div className="pull-left info">
              <p>Moonrise Crystals</p>
              <button
                onClick={logout}
                className="btn bg-purple btn-block btn-flat btn-xs"
              >
                Logout
              </button>
            </div>
          </div>
          <ul className="sidebar-menu">
            <li className="header">NAVIGATION</li>
            {this.mapLinks(userRoutes)}
          </ul>
        </section>
      </aside>
    );
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

export default withRouter(NavigationBar);
