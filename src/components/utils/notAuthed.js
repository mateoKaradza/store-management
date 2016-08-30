import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { dismissRedirect } from '../login/actions';

export default function (ComposedComponent) {
  class NotAuthed extends Component {
    componentWillMount() {
      if (this.props.isAuthenticated)
        this.props.dismissRedirect(this.props.redirect || '/');
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.isAuthenticated)
        this.props.dismissRedirect(this.props.redirect || '/');
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
  NotAuthed.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dismissRedirect: PropTypes.func.isRequired,
    redirect: PropTypes.string,
  };

  function mapStateToProps({ auth }) {
    return {
      isAuthenticated: auth.isAuthenticated,
      redirect: auth.redirect,
    };
  }

  return connect(mapStateToProps, { dismissRedirect })(NotAuthed);
}
