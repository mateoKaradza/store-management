import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ProductList from './ProductList';
import Table from '../shared/Table';
import Search from '../shared/Search';

const AllProducts = ({ products, getProducts, changeStatus, sortBy }) => (
  <div>
    <section className="content-header">
      <h1>All Products</h1>
    </section>
    <section className="content">
      <div className="row">
        <div className="col-md-10">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Search for products</h3>
              <div className="box-tools pull-right">
                <div className="has-feedback">
                  <Search action={getProducts} />
                </div>
              </div>
            </div>
            <Table data={products}>
              <ProductList changeStatus={changeStatus} sortBy={sortBy} />
            </Table>
          </div>
        </div>
        <div className="col-md-2">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Actions</h3>
            </div>
            <div className="box-body">
              <Link to="/products/new">
                <button className="btn btn-primary btn-flat btn-block">
                  Add new product
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

AllProducts.propTypes = {
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
  changeStatus: PropTypes.func,
  sortBy: PropTypes.func,
};

export default AllProducts;
