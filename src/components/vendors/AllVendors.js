import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import VendorList from './VendorList';
import Table from '../shared/Table';
import Search from '../shared/Search';

const AllVendors = ({ vendors, getVendors }) => (
  <div>
    <section className="content-header">
      <h1>All Vendors</h1>
    </section>
    <section className="content">
      <div className="row">
        <div className="col-md-10">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Search for vendors</h3>
              <div className="box-tools pull-right">
                <div className="has-feedback">
                  <Search action={getVendors} />
                </div>
              </div>
            </div>
            <Table data={vendors} pageSize={15} >
              <VendorList />
            </Table>
          </div>
        </div>
        <div className="col-md-2">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Actions</h3>
            </div>
            <div className="box-body">
              <Link to="/Vendors/New">
                <button className="btn btn-primary btn-flat btn-block">
                  Add new vendor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

AllVendors.propTypes = {
  vendors: PropTypes.array.isRequired,
  getVendors: PropTypes.func.isRequired,
};

export default AllVendors;
