import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';

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

const userRoutes = [
  { to: '/', label: 'Home' },
  { to: '/customers', label: 'Customers' },
  { to: '/orders', label: 'Orders' },
  { to: '/products', label: 'Products' },
  { to: '/vendors', label: 'Vendors' },
  { to: '/users', label: 'users' },
];

class NavigationBar extends Component {

  render() {
    console.log(this.props.router.isActive('/customers'));
    const { auth, logout } = this.props;
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src="https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>Mateo Karadza</p>
              <a href="#" onClick={logout}><i className="fa fa-circle text-success" /> Logout</a>
            </div>
          </div>
          <ul className="sidebar-menu">
            <li className="header">NAVIGATION</li>
            <li>
              <Link to="/customers"><i className="fa fa-link" /><span>Customers</span></Link>
            </li>
            <li><a href="#"><i className="fa fa-link"></i> <span>Another Link</span></a></li>
          </ul>
        </section>
      </aside>
    );
  }
};

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default withRouter(NavigationBar);
