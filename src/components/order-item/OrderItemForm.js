import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';
import TextArea from '../shared/TextArea';

class OrderItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0,
      quantity: 0,
      first_stone_earning: 0,
      second_stone_earning: 0,
      third_stone_earning: 0,
      inventory_cost: 0,
      feedback_message: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    if (this.props.params.id)
      this.props.getOrderItem(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    const { orderItem, params } = nextProps;

    if (params.id && Number(params.id) !== orderItem.order_details_id)
      return;
    this.setState({
      order_id: orderItem.order_id,
      product_id: orderItem.product_id,
      order_details_id: orderItem.order_details_id || null,
      name: orderItem.name,
      price: orderItem.price || 0,
      quantity: orderItem.quantity || 0,
      first_stone_earning: orderItem.first_stone_earning || 0,
      second_stone_earning: orderItem.second_stone_earning || 0,
      third_stone_earning: orderItem.third_stone_earning || 0,
      inventory_cost: orderItem.inventory_cost || 0,
      feedback_message: orderItem.feedback_message || '',
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;
    if (data.order_details_id === null) delete data.order_id;
    delete data.name;
    this.props.updateItem(data);
  }

  render() {
    const { name, price, quantity, first_stone_earning, second_stone_earning,
      third_stone_earning, inventory_cost, feedback_message } = this.state;

    return (
      <div className="row">
        <div className="col-md-8">
          <section className="content-header">
            <h1>Item - {name} <small>customize product item</small></h1>
          </section>
          <section className="content">
            <form onSubmit={this.handleSubmit}>
              <div className="box box-primary">
                <div className="box-body">
                  <Input
                    stateKey="price"
                    label="Price"
                    type="number"
                    value={price} // eslint-disable-line
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="quantity"
                    label="Quantity"
                    type="number"
                    value={quantity}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="first_stone_earning"
                    label="First Stone Earning"
                    type="number"
                    value={first_stone_earning} // eslint-disable-line
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="second_stone_earning"
                    label="Second Stone Earning"
                    type="number"
                    value={second_stone_earning} // eslint-disable-line
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="third_stone_earning"
                    label="Third Stone Earning"
                    type="number"
                    value={third_stone_earning} // eslint-disable-line
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="inventory_cost"
                    label="Inventory cost"
                    type="number"
                    value={inventory_cost} // eslint-disable-line
                    required onChange={this.onChange}
                  />
                  <TextArea
                    stateKey="feedback_message"
                    label="Feedback message"
                    value={feedback_message} // eslint-disable-line
                    onChange={this.onChange}
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

OrderItemForm.propTypes = {
  updateItem: PropTypes.func.isRequired,
  orderItem: PropTypes.object.isRequired,
  getOrderItem: PropTypes.func.isRequired,
  params: PropTypes.object,
};

export default OrderItemForm;
