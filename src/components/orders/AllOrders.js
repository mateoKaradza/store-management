import React, { Component, PropTypes } from 'react';
import OrderList from './OrderList';

class AllOrders extends Component {
  constructor(props) {
    super(props);

    this.props.getOrders();
  }

  render() {
    const { orders } = this.props;
    return (
      <div>
        <section className="content-header">
          <h1>All Orders</h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-10">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Last 100 orders</h3>
                </div>
                <div className="box-body">
                  <OrderList orders={orders} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

AllOrders.propTypes = {
  orders: PropTypes.array.isRequired,
  getOrders: PropTypes.func.isRequired,
};

export default AllOrders;
