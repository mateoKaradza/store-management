import React, { Component, PropTypes } from 'react';
import Input from '../../shared/Input';

class VendorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      contact_person: '',
      address: '',
      country: '',
      email: '',
      phone_number: '',
      website: '',
    };
    if (this.props.params.id)
      this.props.getVendor(this.props.params.id);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { vendor } = nextProps;
    if (vendor.vendor_id === Number(nextProps.params.id)) {
      this.setState({
        vendor_id: vendor.vendor_id || null,
        name: vendor.name || '',
        contact_person: vendor.contact_person || '',
        address: vendor.address || '',
        country: vendor.country || '',
        email: vendor.email || '',
        phone_number: vendor.phone_number || '',
        website: vendor.website || '',
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;
    if (data.vendor_id === null) delete data.vendor_id;
    this.props.updateVendor(data);
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
                    label="Vendor Name"
                    value={this.state.name}
                    required onChange={this.onChange}
                  />
                  <Input
                    stateKey="contact_person"
                    label="Contact Person"
                    value={this.state.contact_person}
                    onChange={this.onChange}
                  />
                  <Input
                    stateKey="address"
                    label="Address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                  <Input
                    stateKey="country"
                    label="Country"
                    value={this.state.country}
                    onChange={this.onChange}
                  />
                  <Input
                    stateKey="email"
                    label="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <Input
                    stateKey="phone_number"
                    label="Phone Number"
                    value={this.state.phone_number}
                    onChange={this.onChange}
                  />
                  <Input
                    stateKey="website"
                    label="Website"
                    value={this.state.website}
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

VendorForm.propTypes = {
  params: PropTypes.object,
  updateVendor: PropTypes.func,
  vendor: PropTypes.object,
  getVendor: PropTypes.func,
};

export default VendorForm;
