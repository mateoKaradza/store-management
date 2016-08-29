import React, { PropTypes } from 'react';

const AlertDanger = ({ err }) => (
  <div className="alert alert-danger" role="alert">
    <strong>Oh no!</strong> {err}
  </div>
);

AlertDanger.propTypes = {
  err: PropTypes.string,
};

export default AlertDanger;
