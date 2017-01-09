import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import VendorInfo from './VendorInfo';
import Supplies from './Supplies';
import Table from '../../shared/Table';

class VendorDetail extends Component {
  constructor(props) {
    super(props);

    if (this.props.params.id)
      this.props.loadVendor(this.props.params.id);
  }

  render() {
    const { vendor, supplies } = this.props;
    return (
      <div>
        <section className="content-header">
          <h1>Vendor Profile<small>all the info you need</small></h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-3">
              <VendorInfo vendor={vendor} />
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Actions</h3>
                </div>
                <div className="box-body">
                  <Link to={`/Vendors/${vendor.vendor_id}/Edit`}>
                    <button
                      className="btn btn-success btn-flat btn-block"
                      style={{ marginTop: '5px' }}
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-danger btn-flat btn-block"
                    style={{ marginTop: '5px' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#supplies" data-toggle="tab" aria-expanded="true">Supplies</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="supplies">
                    <Table data={supplies}>
                      <Supplies />
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

VendorDetail.propTypes = {
  loadVendor: PropTypes.func.isRequired,
  vendor: PropTypes.object,
  supplies: PropTypes.array,
  params: PropTypes.object,
};

export default VendorDetail;
