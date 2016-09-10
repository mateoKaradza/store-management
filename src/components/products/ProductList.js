import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
    const { data } = this.props;
    return (
      <table className="table table-hover">
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
          {data ? this.mapProducts(data) : null}
        </tbody>
      </table>
    );
  }
}

ProductList.propTypes = {
  data: PropTypes.array,
  changeStatus: PropTypes.func,
};

export default ProductList;
