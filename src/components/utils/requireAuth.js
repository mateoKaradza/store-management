import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setRedirect } from '../login/actions';

export default function (ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated)
        this.props.setRedirect(this.props.location.pathname);
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.isAuthenticated)
        this.props.setRedirect(nextProps.location.pathname);
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    setRedirect: PropTypes.func.isRequired,
  };

  function mapStateToProps({ auth }) {
    return {
      isAuthenticated: auth.isAuthenticated,
    };
  }

  return connect(mapStateToProps, { setRedirect })(Authenticate);
}
