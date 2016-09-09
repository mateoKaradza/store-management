import React, { PropTypes } from 'react';

const AdditionalInformation = ({ order }) => (
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
          <span className="info-box-icon bg-green">
            <i className="fa fa-plus-square-o" />
          </span>
          <div className="info-box-content">
            <span className="info-box-text">Additional cost</span>
            <span className="info-box-number">{order.additional_cost}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

AdditionalInformation.propTypes = {
  order: PropTypes.object,
};

export default AdditionalInformation;
