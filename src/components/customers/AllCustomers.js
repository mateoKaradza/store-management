import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Search from '../shared/Search';
import CustomerList from './CustomerList';

const AllCustomers = ({ customers, filter }) => (
  <div>
    <section className="content-header">
      <h1>All Customers</h1>
    </section>
    <section className="content">
      <div className="row">
        <div className="col-md-10">
          <div className="box">
            <div className="box-header with-border">
              <div className="row">
                <div className="col-md-8">
                  <Search action={filter} />
                </div>
                <div className="col-md-4">
                  <div className="pull-xs-right">
                    <Link to="/Customers/New">
                      <button className="btn btn-secondary">
                        <i className="fa fa-plus m-r-1" />New customer
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-body">
              <CustomerList customers={customers} />
            </div>
            <div className="box-footer">
              Test
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
