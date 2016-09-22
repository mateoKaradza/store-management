import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: '',
    };

    this.mapProducts = this.mapProducts.bind(this);
    this.sortData = this.sortData.bind(this);
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

  sortData(field) {
    this.props.sortBy(field, field === this.state.sort);
    if (this.state.sort === field)
      this.setState({ sort: '' });
    else this.setState({ sort: field });
  }

  render() {
    const { data } = this.props;
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <th style={{ width: '50px' }}>#</th>
            <th style={{ cursor: 'pointer' }}onClick={() => this.sortData('name')}>Name</th>
            <th style={{ width: '80px', cursor: 'pointer' }} onClick={() => this.sortData('status')}>Status</th>
            <th style={{ width: '80px', cursor: 'pointer' }} onClick={() => this.sortData('default_price')}>Price</th>
            <th style={{ width: '80px', cursor: 'pointer' }} onClick={() => this.sortData('quantity')}>Quantity</th>
            <th style={{ width: '120px', cursor: 'pointer' }} onClick={() => this.sortData('inventory_cost')} >Inventory Cost</th>
            <th style={{ width: '65px', cursor: 'pointer' }} onClick={() => this.sortData('first_stone_earning')} >First</th>
            <th style={{ width: '65px', cursor: 'pointer' }} onClick={() => this.sortData('second_stone_earning')} >Second</th>
            <th style={{ width: '65px', cursor: 'pointer' }} onClick={() => this.sortData('third_stone_earning')} >Third</th>
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
  sortBy: PropTypes.func,
};

export default ProductList;
