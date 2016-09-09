import React, { Component, PropTypes } from 'react';
import Input from '../../shared/Input';
import TextArea from '../../shared/TextArea';
import Select from '../../shared/Select';

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order_id: this.props.params.order_id,
      customer_id: this.props.params.customer_id, // required
      date: '',
      additional_cost: 0,
      notes: '',
      platform_id: 1,
    };

    if (this.props.params.order_id)
      this.props.getOrder(this.props.params.order_id);

    this.props.getPlatforms();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { order, params } = nextProps;
    if (order.order_id === Number(params.order_id)) {
      this.setState({
        customer_id: order.customer_id || nextProps.params.customer_id,
        order_id: order.order_id || nextProps.params.order_id,
        date: order.date,
        additional_cost: order.additional_cost,
        notes: order.order_notes,
        platform_id: order.platform_id || 1,
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;
    if (data.order_id === null) delete data.order_id;
    this.props.updateOrder(data);
  }

  render() {
    const title = 'Create New Order';
    const { platform_id, date, additional_cost, notes } = this.state;

    const data = this.props.platforms.map(i => (
      { label: i.label, value: i.platform_id }
    ));

    return (
      <div className="row">
        <div className="col-md-8">
          <section className="content-header">
            <h1>Order Form</h1>
          </section>
          <section className="content">
            <form onSubmit={this.handleSubmit}>
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">{title}</h3>
                </div>
                <div className="box-body">
                  <Select
                    label="Platform"
                    value={platform_id} // eslint-disable-line
                    onChange={this.onChange}
                    data={data}
                    stateKey="platform_id"
                  />
                  <Input
                    stateKey="date"
                    label="Date"
                    type="date"
                    value={date}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="additional_cost"
                    label="Additional cost"
                    type="number"
                    value={additional_cost} // eslint-disable-line
                    required onChange={this.onChange}
                  />
                  <TextArea
                    stateKey="notes"
                    label="Notes"
                    value={notes}
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

OrderForm.propTypes = {
  params: PropTypes.object,
  updateOrder: PropTypes.func,
  order: PropTypes.object,
  platforms: PropTypes.array.isRequired,
  getOrder: PropTypes.func,
  getPlatforms: PropTypes.func.isRequired,
  resetOrderForm: PropTypes.func.isRequired,
};

export default OrderForm;
