import React, { Component, PropTypes } from 'react';
import NavigationBar from './NavigationBar';
import FlashMessageProvider from './flashMessages/FlashMessageProvider';

class Layout extends Component {
  componentDidMount() {
    if (window.getAdminLTE().layout)
      window.getAdminLTE().layout.fix();
  }

  render() {
    const { auth, logout, children } = this.props;
    return (
      <div className="wrapper">
        <NavigationBar auth={auth} logout={logout} />
        <div className="content-wrapper" style={{ paddingTop: '0px' }}>
          <FlashMessageProvider />
          {children}
        </div>
        <footer className="main-footer">
          <div className="pull-right hidden-xs">
          Anything you want
          </div>
          <strong>Copyright &copy; 2016 <a href="https://moonrisecrystals.com">Moonrise Crystals</a>.</strong> All rights reserved.
        </footer>
      </div>
    );
  }
}

Layout.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Layout;
