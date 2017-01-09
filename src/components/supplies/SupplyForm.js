import React, { Component, PropTypes } from 'react';
import Input from '../shared/Input';
import TextArea from '../shared/TextArea';

/*

  Needs testing with actual database, and vendor page needs a way to pick a product for this form to 'open up'

*/

class SupplyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product_name: '',
      date_added: '',
      weight: '',
      cost: 0,
      quantity: 0,
      quality: '',
      notes: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    if (this.props.params.id)
      this.props.getSupply(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    const { supply, params } = nextProps;

    if (params.id && Number(params.id) !== supply.unique_id)
      return;
    this.setState({
      product_name: supply.product_name || '',
      unique_id: supply.date_added,
      date_added: supply.date_added || '',
      weight: supply.weight || '',
      cost: supply.cost || 0,
      quantity: supply.quantity || 0,
      quality: supply.quality || '',
      notes: supply.notes || '',
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;
    if (data.unique_id === null) delete data.unique_id;
    this.props.updateSupply(data);
  }

  render() {
    const { product_name, date_added, weight, cost, quantity, quality, notes } = this.state;

    return (
      <div className="row">
        <div className="col-md-8">
          <section className="content-header">
            <h1>Supply - {product_name}</h1>
          </section>
          <section className="content">
            <form onSubmit={this.handleSubmit}>
              <div className="box box-primary">
                <div className="box-body">
                  <Input
                    stateKey="date_added"
                    label="Date"
                    type="date"
                    value={date_added}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="weight"
                    label="Weight"
                    value={weight}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="cost"
                    label="Cost"
                    type="number"
                    value={cost}
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
                    stateKey="quality"
                    label="Quality"
                    value={quality}
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

SupplyForm.propTypes = {
  updateSupply: PropTypes.func.isRequired,
  supply: PropTypes.object.isRequired,
  getSupply: PropTypes.func.isRequired,
  params: PropTypes.object,
};

export default SupplyForm;
