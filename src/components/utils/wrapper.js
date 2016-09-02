import React, { PropTypes } from 'react';

const Wrapper = ({ children }) => (
  <div>{children}</div>
);

Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Wrapper;
