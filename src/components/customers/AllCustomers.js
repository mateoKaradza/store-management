import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Search from '../shared/Search';
import CustomerList from './CustomerList';

const AllCustomers = ({ customers, filter }) => (
  <div>
    <section className="content-header">
      <h1>All Customers<small>find the customer you are looking for</small></h1>

    </section>
    <section className="content">
      <div className="row">
        <div className="col-md-10">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Search for customers</h3>
              <div className="box-tools pull-right">
                <div className="has-feedback">
                  <Search action={filter} />
                </div>
              </div>
            </div>
            <div className="box-body">
              <CustomerList customers={customers} />
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Actions</h3>
            </div>
            <div className="box-body">
              <Link to="/customers/new">
                <button className="btn btn-primary btn-flat btn-block">
                  Add new customer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

AllCustomers.propTypes = {
  customers: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
};

export default AllCustomers;
