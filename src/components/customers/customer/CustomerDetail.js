import React, { Component, PropTypes } from 'react';

import CustomerInfo from './CustomerInfo';
import AdditionalInformation from './AdditionalInformation';
import Orders from './Orders';
import Items from './Items';

class CustomerDetail extends Component {
  constructor(props) {
    super(props);

    if (this.props.params.id)
      this.props.getCustomer(this.props.params.id);
  }

  render() {
    const { customer, orders, items } = this.props;
    return (
      <div>
        <section className="content-header">
          <h1>Customer Profile<small>all the info you need</small></h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-3">
              <CustomerInfo customer={customer} />
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Actions</h3>
                </div>
                <div className="box-body">
                  <button className="btn btn-primary btn-flat btn-block">Add new Order</button>
                  <button className="btn btn-success btn-flat btn-block">Edit</button>
                  <button className="btn btn-danger btn-flat btn-block">Delete</button>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <AdditionalInformation />
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#orders" data-toggle="tab" aria-expanded="true">Orders</a>
                  </li>
                  <li className="">
                    <a href="#items" data-toggle="tab" aria-expanded="true">Items</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <Orders orders={orders} />
                  <Items items={items} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

CustomerDetail.propTypes = {
  getCustomer: PropTypes.func.isRequired,
  customer: PropTypes.object,
  orders: PropTypes.array,
  items: PropTypes.array,
  params: PropTypes.object,
};

export default CustomerDetail;
