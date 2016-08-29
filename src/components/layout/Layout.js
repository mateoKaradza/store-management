import React, { PropTypes } from 'react';
import NavigationBar from './NavigationBar';
import FlashMessageProvider from './messages/FlashMessageProvider';

const Layout = ({ user, logout, children }) => {
  const contentStyle = {
    padding: '20px 10px',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    borderRadius: '3px',
  };

  return (
    <div className="container">
      <NavigationBar user={user} logout={logout} />
      <FlashMessageProvider />
      <div className="row" style={contentStyle}>
        <div className="col-md-12">
          {children}
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Layout;
