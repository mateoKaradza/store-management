import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function mapSupplies(supplies) {
  return supplies.map((supply) =>
    <tr key={supply.unique_id}>
      <td>{supply.name}</td>
      <td>{supply.date_added}</td>
      <td>${supply.cost}</td>
      <td>{supply.quantity}</td>
      <td>{supply.quality}</td>
      <td>
        <div className="btn-group">
          <Link to={`/Supplies/${supply.unique_id}`} style={{ color: 'black' }}>
            <button className="btn btn-primary btn-flat btn-xs margin-r-5">View</button>
          </Link>
          <Link to={`/Vendors/${supply.vendor_id}`} style={{ color: 'black' }}>
            <button className="btn btn-success btn-flat btn-xs margin-r-5">Vendor</button>
          </Link>
        </div>
      </td>
    </tr>
  );
}

const Supplies = ({ data }) => (
  <table className="table table-hover no-margin">
    <tbody>
      <tr>
        <th>Vendor</th>
        <th>Date</th>
        <th style={{ width: '70px' }}>Cost</th>
        <th style={{ width: '70px' }}>Quantity</th>
        <th style={{ width: '110px' }}>Quality</th>
        <th style={{ width: '120px' }}>Actions</th>
      </tr>
      {data ? mapSupplies(data) : null}
    </tbody>
  </table>
);

Supplies.propTypes = {
  data: PropTypes.array,
};

export default Supplies;
