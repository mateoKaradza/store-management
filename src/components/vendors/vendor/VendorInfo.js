import React, { PropTypes } from 'react';

import vendorIcon from '../../../../public/img/carton-icon.png';

const VendorInfo = ({ vendor }) => (
  <div>
    <div className="box box-primary">
      <div className="box-body">
        <img
          className="profile-user-img img-responsive img-circle"
          src={vendorIcon}
          role="presentation"
        />
        <h3 className="profile-username text-center">
          {`${vendor.name} #${vendor.vendor_id}`}
        </h3>
      </div>
    </div>
    <div className="box box-primary">
      <div className="box-body">
        <strong>
          Contact Person
        </strong>
        <p>
          {vendor.contact_person || 'Not provided'}
        </p>
        <strong>
          Address
        </strong>
        <p>
          {vendor.address || 'Not provided'}
        </p>
        <strong>
          Country
        </strong>
        <p>
          {vendor.country || 'Not provided'}
        </p>
        <strong>
          Email
        </strong>
        <p>
          {vendor.email || 'Not provided'}
        </p>
        <strong>
          Phone Number
        </strong>
        <p>
          {vendor.phone_number || 'Not provided'}
        </p>
        <strong>
          Website
        </strong>
        <p>
          {vendor.website || 'Not provided'}
        </p>
      </div>
    </div>
  </div>
);

VendorInfo.propTypes = {
  vendor: PropTypes.object.isRequired,
};

export default VendorInfo;
