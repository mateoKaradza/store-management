import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import CustomerInfo from './CustomerInfo';
import AdditionalInformation from './AdditionalInformation';
import Table from '../../shared/Table';
import Orders from './Orders';
import Items from './Items';

class CustomerDetail extends Component {
  constructor(props) {
    super(props);

    if (this.props.params.id)
      this.props.loadCustomer(this.props.params.id);
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
                  <Link to={`/Customers/${customer.customer_id}/NewOrder`}>
                    <button
                      className="btn btn-primary btn-flat btn-block"
                      style={{ marginTop: '5px' }}
                    >
                      Add new Order
                    </button>
                  </Link>
                  <Link to={`/Customers/${customer.customer_id}/Edit`}>
                    <button
                      className="btn btn-success btn-flat btn-block"
                      style={{ marginTop: '5px' }}
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-danger btn-flat btn-block"
                    style={{ marginTop: '5px' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <AdditionalInformation orders={orders} />
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
                  <div className="tab-pane active" id="orders">
                    <Table data={orders}>
                      <Orders />
                    </Table>
                  </div>
                  <div className="tab-pane" id="items">
                    <Table data={items}>
                      <Items />
                    </Table>
                  </div>
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
  loadCustomer: PropTypes.func.isRequired,
  customer: PropTypes.object,
  orders: PropTypes.array,
  items: PropTypes.array,
  params: PropTypes.object,
};

export default CustomerDetail;
