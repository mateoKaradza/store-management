import React, { PropTypes } from 'react';

const CustomerInfo = ({ customer }) => (
  <div>
    <div className="box box-primary">
      <div className="box-body">
        <img
          className="profile-user-img img-responsive img-circle"
          src="/dist/img/user-female-icon.png"
          role="presentation"
        />
        <h3 className="profile-username text-center">
          {`${customer.first_name} ${customer.last_name} #${customer.customer_id}`}
        </h3>
        <p className="text-muted text-center">
          {`${customer.username} / ${customer.email}`}
        </p>
      </div>
    </div>
    <div className="box box-primary">
      <div className="box-header with-border">
        <h3 className="box-title">About</h3>
      </div>
      <div className="box-body">
        <strong>
          <i className="fa fa-map-marker margin-r-5" />
          Address
        </strong>
        <p>
          {`${customer.address}`} <br />
          {`${customer.city} (${customer.zip}) ${customer.state}`}
        </p>
        <strong>
          <i className="fa fa-globe margin-r-5" />
          Country
        </strong>
        <p>
          {`${customer.country}`}
        </p>
        <strong>
          <i className="fa fa-phone margin-r-5" />
          Phone number
        </strong>
        <p>
          {`${customer.phone_number}` || 'Not provided'}
        </p>
        <strong>
          <i className="fa fa-pencil margin-r-5" />
          Notes
        </strong>
        <p>
          {`${customer.notes}` || 'Empty - at this moment!'}
        </p>
      </div>
    </div>
  </div>
);

CustomerInfo.propTypes = {
  customer: PropTypes.object.isRequired,
};

export default CustomerInfo;
