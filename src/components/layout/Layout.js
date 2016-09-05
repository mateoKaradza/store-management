import React, { Component, PropTypes } from 'react';
import NavigationBar from './NavigationBar';
import FlashMessageProvider from './flashMessages/FlashMessageProvider';
import Footer from './Footer.js';

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
        <Footer />
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
