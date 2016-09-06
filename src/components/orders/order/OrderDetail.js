import React, { Component, PropTypes } from 'react';

import CustomerInfo from '../../customers/customer/CustomerInfo';
import AdditionalInformation from './AdditionalInformation';
import OrderItems from './OrderItems';
import OrderStats from './OrderStats';

class CustomerDetail extends Component {
  constructor(props) {
    super(props);

    if (this.props.params.id)
      this.props.getOrder(this.props.params.id);
  }

  render() {
    const { order, items } = this.props;
    return (
      <div>
        <section className="content-header">
          <h1>Order Detail<small>all the info you need</small></h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-3">
              <CustomerInfo customer={order} />
              <div className="info-box">
                <span className="info-box-icon bg-orange">
                  <i className="fa fa-pencil" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Order Notes</span>
                  <span className="info-box-number">{order.notes || 'None'}</span>
                </div>
              </div>
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Actions</h3>
                </div>
                <div className="box-body">
                  <button className="btn bg-purple btn-flat btn-block">VIEW CUSTOMER</button>
                  <button className="btn btn-primary btn-flat btn-block">ADD NEW PRODUCT</button>
                  <button className="btn btn-success btn-flat btn-block">EDIT ORDER</button>
                  <button className="btn btn-danger btn-flat btn-block">DELETE ORDER</button>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <AdditionalInformation order={order} />
              <OrderStats additionalCost={order.additional_cost} items={items} />
              <OrderItems items={items} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

CustomerDetail.propTypes = {
  getOrder: PropTypes.func.isRequired,
  order: PropTypes.object,
  items: PropTypes.array,
  params: PropTypes.object,
};

export default CustomerDetail;
