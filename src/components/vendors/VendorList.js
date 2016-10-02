import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class VendorList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: '',
    };

    this.mapVendors = this.mapVendors.bind(this);
  }

  mapVendors(vendors) {
    return vendors.map(vendor =>
      <tr key={vendor.vendor_id}>
        <td>{vendor.vendor_id}</td>
        <td>{vendor.name}</td>
        <td>{vendor.contact_person}</td>
        <td>{vendor.country}</td>
        <td>{vendor.phone_number}</td>
        <td>{vendor.email}</td>
        <td>
          <Link to={`/Vendors/${vendor.vendor_id}`}>
            <button className="btn btn-primary btn-block btn-flat btn-xs">View</button>
          </Link>
        </td>
      </tr>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <th style={{ width: '50px' }}>#</th>
            <th>Name</th>
            <th>Contact Person</th>
            <th>Country</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          {data ? this.mapVendors(data) : null}
        </tbody>
      </table>
    );
  }
}

VendorList.propTypes = {
  data: PropTypes.array,
};

export default VendorList;
