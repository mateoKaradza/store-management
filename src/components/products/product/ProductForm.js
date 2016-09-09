import React, { Component, PropTypes } from 'react';
import Input from '../../shared/Input';

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      default_price: 0,
      quantity: 0,
      first_stone_earning: 0,
      second_stone_earning: 0,
      third_stone_earning: 0,
      inventory_cost: 0,
    };
    if (this.props.params.id)
      this.props.getProduct(this.props.params.id);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { product } = nextProps;
    if (product.product_id === Number(nextProps.params.id)) {
      this.setState({
        product_id: product.product_id || null,
        name: product.name || '',
        default_price: product.default_price || 0,
        quantity: product.quantity || 0,
        first_stone_earning: product.first_stone_earning || 0,
        second_stone_earning: product.second_stone_earning || 0,
        third_stone_earning: product.third_stone_earning || 0,
        inventory_cost: product.inventory_cost || 0,
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;
    if (data.product_id === null) delete data.product_id;
    this.props.updateProduct(data);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <section className="content-header">
            <h1>New Product</h1>
          </section>
          <section className="content">
            <form onSubmit={this.handleSubmit}>
              <div className="box box-primary">
                <div className="box-body">
                  <Input
                    stateKey="name"
                    label="Product Name"
                    value={this.state.name}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="default_price"
                    label="Default price"
                    type="number"
                    value={this.state.default_price}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="quantity"
                    label="Quantity"
                    type="number"
                    value={this.state.quantity}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="first_stone_earning"
                    label="First Stone Earning"
                    type="number"
                    value={this.state.first_stone_earning}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="second_stone_earning"
                    label="Second Stone Earning"
                    type="number"
                    value={this.state.second_stone_earning}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="third_stone_earning"
                    label="Third Stone Earning"
                    type="number"
                    value={this.state.third_stone_earning}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="inventory_cost"
                    label="Inventory cost"
                    type="number"
                    value={this.state.inventory_cost}
                    required onChange={this.onChange}
                  />
                </div>
                <div className="box-footer">
                  <button type="submit" className="btn btn-primary pull-right btn-block">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

ProductForm.propTypes = {
  params: PropTypes.object,
  updateProduct: PropTypes.func,
  product: PropTypes.object,
  getProduct: PropTypes.func,
};

export default ProductForm;
