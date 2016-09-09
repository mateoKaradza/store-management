import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Search from '../shared/Search';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.mapProducts = this.mapProducts.bind(this);
  }

  mapProducts(products) {
    return products.map(product =>
      <tr key={product.product_id}>
        <td>{product.product_id}</td>
        <td>{product.name}</td>
        <td>
          {product.status
            ? <button
              className="btn btn-danger btn-flat btn-block btn-xs"
              onClick={() => this.props.changeStatus(product.product_id)}
            >INACTIVE</button>
            : <button
              className="btn btn-success btn-flat btn-block btn-xs"
              onClick={() => this.props.changeStatus(product.product_id)}
            >ACTIVE</button>}
        </td>
        <td>${product.default_price}</td>
        <td>{product.quantity}</td>
        <td>${product.inventory_cost}</td>
        <td>${product.first_stone_earning}</td>
        <td>${product.second_stone_earning}</td>
        <td>${product.third_stone_earning}</td>
        <td>
          <Link to={`/Products/${product.product_id}`}>
            <button className="btn btn-primary btn-block btn-flat btn-xs">View</button>
          </Link>
        </td>
      </tr>
    );
  }

  render() {
    const { products, getProducts } = this.props;
    return (
      <div className="box box-primary">
        <div className="box-header with-border">
          <h3 className="box-title">Search for products</h3>
          <div className="box-tools pull-right">
            <div className="has-feedback">
              <Search action={getProducts} />
            </div>
          </div>
        </div>
        <div className="box-body">
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th style={{ width: '50px' }}>#</th>
                <th>Name</th>
                <th style={{ width: '80px' }}>Status</th>
                <th style={{ width: '80px' }}>Price</th>
                <th style={{ width: '80px' }}>Quantity</th>
                <th style={{ width: '120px' }}>Inventory Cost</th>
                <th style={{ width: '50px' }}>First</th>
                <th style={{ width: '50px' }}>Second</th>
                <th style={{ width: '50px' }}>Third</th>
                <th style={{ width: '70px' }}>Actions</th>
              </tr>
              {products ? this.mapProducts(products) : null}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  changeStatus: PropTypes.func,
  getProducts: PropTypes.func.isRequired,
};

export default ProductList;
