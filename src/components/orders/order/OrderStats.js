import React, { PropTypes } from 'react';
import { getOrderStats } from '../../utils/orderCalculations';

const OrderStats = ({ items, additionalCost }) => {
  const stats = getOrderStats(items);
  const totalCost = Number(stats.total) + Number(additionalCost);
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-green">
              <i className="fa fa-dollar" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Total</span>
              <span className="info-box-number">{`${stats.total} (${totalCost})`}</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-olive">
              <i className="fa fa-money" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Gross Total</span>
              <span className="info-box-number">{stats.grossTotal}</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-red">
              <i className="fa fa-truck" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Inventory</span>
              <span className="info-box-number">{stats.inventoryCost}</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-purple">
              <i className="fa fa-shopping-bag" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Products</span>
              <span className="info-box-number">{stats.quantity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderStats.propTypes = {
  items: PropTypes.array,
  additionalCost: PropTypes.string,
};

export default OrderStats;
