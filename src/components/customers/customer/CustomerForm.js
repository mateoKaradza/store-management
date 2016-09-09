import React, { Component, PropTypes } from 'react';
import Input from '../../shared/Input';
import TextArea from '../../shared/TextArea';

class CustomerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      phone_number: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      notes: '',
    };
    if (this.props.params.id)
      this.props.getCustomer(this.props.params.id);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { customer } = nextProps;
    this.setState({
      customer_id: customer.customer_id || null,
      first_name: customer.first_name || '',
      last_name: customer.last_name || '',
      username: customer.username || '',
      email: customer.email || '',
      phone_number: customer.phone_number || '',
      address: customer.address || '',
      city: customer.city || '',
      zip: customer.zip || '',
      state: customer.state || '',
      country: customer.country || '',
      notes: customer.notes || '',
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;
    if (data.customer_id === null) delete data.customer_id;
    this.props.updateCustomer(data);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <section className="content-header">
            <h1>New Customer</h1>
          </section>
          <section className="content">
            <form onSubmit={this.handleSubmit}>
              <div className="box box-primary">
                <div className="box-body">
                  <Input
                    stateKey="first_name"
                    label="First Name"
                    value={this.state.first_name}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="last_name"
                    label="Last Name"
                    value={this.state.last_name}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="username"
                    label="Username"
                    value={this.state.username}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="email"
                    label="Email"
                    value={this.state.email}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="phone_number"
                    label="Phone Number"
                    value={this.state.phone_number}
                    onChange={this.onChange}
                  />
                  <Input
                    stateKey="address"
                    label="Address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                  <Input
                    stateKey="city"
                    label="City"
                    value={this.state.city}
                    onChange={this.onChange}
                  />
                  <Input
                    stateKey="state"
                    label="State"
                    value={this.state.state}
                    onChange={this.onChange}
                  />
                  <Input
                    stateKey="zip"
                    label="ZIP"
                    value={this.state.zip}
                    onChange={this.onChange}
                  />
                  <Input
                    stateKey="country"
                    label="Country"
                    value={this.state.country}
                    onChange={this.onChange}
                  />
                  <TextArea
                    stateKey="notes"
                    label="Notes"
                    value={this.state.notes}
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

CustomerForm.propTypes = {
  params: PropTypes.object,
  updateCustomer: PropTypes.func,
  customer: PropTypes.object,
  getCustomer: PropTypes.func,
};

export default CustomerForm;
