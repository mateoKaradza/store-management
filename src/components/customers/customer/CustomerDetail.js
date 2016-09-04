import React, { Component, PropTypes } from 'react';

import CustomerProfile from './CustomerProfile';
import CustomerStats from './CustomerStats';
import { getTotal } from '../../utils/orderCalculations';

class CustomerDetail extends Component {
  constructor(props) {
    super(props);

    if (this.props.params.id)
      this.props.getCustomer(this.props.params.id);
  }

  render() {
    const { customer, orders } = this.props;
    return (
      <div>
        <h1>Customer Detail #{this.props.params.id}</h1>
        <CustomerProfile customer={customer} />
        <CustomerStats stats={getTotal(orders)} />
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
