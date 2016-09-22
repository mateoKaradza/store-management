import React, { PropTypes } from 'react';

import { getTotal } from '../../utils/orderCalculations';

const AdditionalInformation = ({ orders }) => (
  <div className="row">
    <div className="col-md-3">
      <div className="info-box">
        <span className="info-box-icon bg-green">
          <i className="fa fa-usd" />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">Total money spent</span>
          <span className="info-box-number">{getTotal(orders)}</span>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="info-box">
        <span className="info-box-icon bg-blue">
          <i className="fa fa-shopping-bag" />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">Number of orders</span>
          <span className="info-box-number">{orders.length}</span>
        </div>
      </div>
    </div>
  </div>
);

AdditionalInformation.propTypes = {
  orders: PropTypes.array,
};

export default AdditionalInformation;
