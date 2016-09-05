import React, { Component, PropTypes } from 'react';

import CustomerProfile from './CustomerProfile';
import CustomerStats from './CustomerStats';
import BasicInfo from './BasicInfo';
import Orders from './Orders';
import Items from './Items';
import { getTotal } from '../../utils/orderCalculations';

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
              <BasicInfo customer={customer} />
            </div>
            <div className="col-md-9">
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#orders" data-toggle="tab" aria-expanded="true">Orders</a>
                  </li>
                  <li className="">
                    <a href="#items" data-toggle="tab" aria-expanded="true">Items</a>
                  </li>
                  <li className="">
                    <a href="#timeline" data-toggle="tab" aria-expanded="false">Timeline</a>
                  </li>
                  <li className="">
                    <a href="#settings" data-toggle="tab" aria-expanded="false">Settings</a>
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
