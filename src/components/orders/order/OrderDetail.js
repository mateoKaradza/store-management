import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import CustomerInfo from '../../customers/customer/CustomerInfo';
import AdditionalInformation from './AdditionalInformation';
import OrderItems from './OrderItems';
import OrderStats from './OrderStats';
import ProductList from './ProductList';

class CustomerDetail extends Component {
  constructor(props) {
    super(props);

    if (this.props.params.id)
      this.props.loadOrder(this.props.params.id);
  }

  render() {
    const { order, items, products, getProducts, updateItem, addCustom, deleteItem } = this.props;
    return (
      <div>
        <section className="content-header">
          <h1>Order Detail<small>all the info you need</small></h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-3">
              <CustomerInfo customer={order} />
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Order Notes</h3>
                </div>
                <div className="box-body">
                  <p>{order.order_notes || 'None'}</p>
                </div>
              </div>
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Actions</h3>
                </div>
                <div className="box-body">
                  <Link to={`/Customers/${order.customer_id}`}>
                    <button
                      className="btn bg-purple btn-flat btn-block"
                      style={{ marginTop: '5px' }}
                    >
                      VIEW CUSTOMER
                    </button>
                  </Link>
                  <Link to={'CHANGE'}>
                    <button
                      className="btn btn-primary btn-flat btn-block"
                      style={{ marginTop: '5px' }}
                    >
                      ADD NEW PRODUCT
                    </button>
                  </Link>
                  <Link to={`/Orders/${order.order_id}/Edit`}>
                    <button
                      className="btn btn-success btn-flat btn-block"
                      style={{ marginTop: '5px' }}
                    >
                      EDIT ORDER
                    </button>
                  </Link>
                  <Link to={'CHANGE'}>
                    <button
                      className="btn btn-danger btn-flat btn-block"
                      style={{ marginTop: '5px' }}
                    >
                      DELETE ORDER
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <AdditionalInformation order={order} />
              <OrderStats additionalCost={order.additional_cost} items={items} />
              <ProductList
                products={products}
                getProducts={getProducts}
                updateItem={updateItem}
                addCustom={addCustom}
                order_id={order.order_id}
              />
              <OrderItems items={items} deleteItem={deleteItem} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

CustomerDetail.propTypes = {
  loadOrder: PropTypes.func.isRequired,
  order: PropTypes.object,
  items: PropTypes.array,
  products: PropTypes.array,
  getProducts: PropTypes.func,
  params: PropTypes.object,
  updateItem: PropTypes.func,
  addCustom: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default CustomerDetail;
