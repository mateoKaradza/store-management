import React, { PropTypes } from 'react';

// Not in function yet

const AdditionalInformation = () => (
  <div className="row">
    <div className="col-md-3">
      <div className="info-box">
        <span className="info-box-icon bg-green">
          <i className="fa fa-usd" />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">Total money spent</span>
          <span className="info-box-number">93.139</span>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="info-box">
        <span className="info-box-icon bg-green">
          <i className="fa fa-money" />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">Gross profit</span>
          <span className="info-box-number">93,139</span>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="info-box">
        <span className="info-box-icon bg-blue">
          <i className="fa fa-calendar-o" />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">First known order</span>
          <span className="info-box-number">2016-09-06</span>
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
          <span className="info-box-number">5</span>
        </div>
      </div>
    </div>
  </div>
);

export default AdditionalInformation;
