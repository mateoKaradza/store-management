import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import ProductInfo from './ProductInfo';
import Orders from './Orders';
import Table from '../../shared/Table';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    if (this.props.params.id)
      this.props.loadProduct(this.props.params.id);
  }

  render() {
    const { product, orders, changeStatus } = this.props;
    return (
      <div>
        <section className="content-header">
          <h1>Product Profile<small>all the info you need</small></h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-3">
              <ProductInfo product={product} changeStatus={changeStatus} />
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Actions</h3>
                </div>
                <div className="box-body">
                  <Link to={`/Products/${product.product_id}/Edit`}>
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
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#orders" data-toggle="tab" aria-expanded="true">Orders</a>
                  </li>
                  <li className="">
                    <a href="#supplies" data-toggle="tab" aria-expanded="true">Supplies</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="orders">
                    <Table data={orders}>
                      <Orders />
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

ProductDetail.propTypes = {
  loadProduct: PropTypes.func.isRequired,
  product: PropTypes.object,
  orders: PropTypes.array,
  params: PropTypes.object,
  changeStatus: PropTypes.func.isRequired,
};

export default ProductDetail;
