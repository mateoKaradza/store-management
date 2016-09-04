import React, { PropTypes } from 'react';

const CustomerProfile = ({ stats }) => (
  <div>
    <p><b>Total spent: {stats}</b></p>
  </div>
);

CustomerProfile.propTypes = {
  stats: PropTypes.number,
};

export default CustomerProfile;
