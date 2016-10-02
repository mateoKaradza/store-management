import React, { PropTypes } from 'react';
import { getOrderStats } from '../../utils/orderCalculations';

const AdditionalInformation = ({ order, additionalCost, items }) => {
  const stats = getOrderStats(items);
  const totalCost = (Number(stats.total) + Number(additionalCost)).toFixed(2);

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="info-box">
            <span className="info-box-icon bg-blue">
              <i className="fa fa-shopping-basket" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Platform</span>
              <span className="info-box-number">{order.name}</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-box">
            <span className="info-box-icon bg-blue">
              <i className="fa fa-calendar-o" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Date</span>
              <span className="info-box-number">{order.date}</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
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
      <div className="row">
        <div className="col-md-4">
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
        <div className="col-md-4">
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
        <div className="col-md-4">
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
      </div>
    </div>
  );
};

AdditionalInformation.propTypes = {
  order: PropTypes.object,
  items: PropTypes.array,
  additionalCost: PropTypes.number,
};

export default AdditionalInformation;
