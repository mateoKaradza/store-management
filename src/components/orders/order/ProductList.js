import React, { Component, PropTypes } from 'react';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.mapProducts = this.mapProducts.bind(this);
    this.addOne = this.addOne.bind(this);
  }

  addOne(item) {
    const data = {
      product_id: item.product_id,
      order_id: this.props.order_id,
      quantity: 1,
      price: item.default_price,
      first_stone_earning: item.first_stone_earning,
      second_stone_earning: item.second_stone_earning,
      third_stone_earning: item.third_stone_earning,
      inventory_cost: item.inventory_cost,
      feedback_message: null,
    };
    this.props.updateItem(data);
  }

  mapProducts(products) {
    return products.map(product => {
      if (product.status === 1)
        return null;
      return (
        <tr key={product.product_id}>
          <td>{product.product_id}</td>
          <td>{product.name}</td>
          <td>${product.default_price}</td>
          <td>{product.quantity}</td>
          <td>${product.inventory_cost}</td>
          <td>${product.first_stone_earning}</td>
          <td>${product.second_stone_earning}</td>
          <td>${product.third_stone_earning}</td>
          <td>
            <button
              className="btn btn-primary btn-flat btn-xs btn-block margin-r-5"
              onClick={() => this.addOne(product)}
            >Add 1</button>
          </td>
        </tr>
      );
    }
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
            <th style={{ width: '80px' }}>Price</th>
            <th style={{ width: '80px' }}>Quantity</th>
            <th style={{ width: '120px' }}>Inventory Cost</th>
            <th style={{ width: '50px' }}>First</th>
            <th style={{ width: '50px' }}>Second</th>
            <th style={{ width: '50px' }}>Third</th>
            <th style={{ width: '140px' }}>Actions</th>
          </tr>
          {data ? this.mapProducts(data) : null}
        </tbody>
      </table>
    );
  }
}

ProductList.propTypes = {
  data: PropTypes.array,
  order_id: PropTypes.number,
  updateItem: PropTypes.func,
};

export default ProductList;
