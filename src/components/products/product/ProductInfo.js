import React, { PropTypes } from 'react';

const ProductInfo = ({ product, changeStatus }) => (
  <div>
    <div className="box box-primary">
      <div className="box-body">
        <img
          className="profile-user-img img-responsive img-circle"
          src="/dist/img/gift-icon.png"
          role="presentation"
        />
        <h3 className="profile-username text-center">
          {`${product.name} #${product.product_id}`}
        </h3>
        {product.status
          ? <button
            className="btn btn-danger btn-block"
            onClick={() => changeStatus(product.product_id)}
          >INACTIVE</button>
          : <button
            className="btn btn-success btn-block"
            onClick={() => changeStatus(product.product_id)}
          >ACTIVE</button>}
      </div>
    </div>
    <div className="box box-primary">
      <div className="box-body">
        <strong>
          Default Price
        </strong>
        <p>
          $ {product.default_price}
        </p>
        <strong>
          Quantity
        </strong>
        <p>
          {product.quantity}
        </p>
        <strong>
          Inventory Cost
        </strong>
        <p>
          $ {product.inventory_cost}
        </p>
        <strong>
          First Stone Earning
        </strong>
        <p>
          $ {product.first_stone_earning}
        </p>
        <strong>
          Second Stone Earning
        </strong>
        <p>
          $ {product.second_stone_earning}
        </p>
        <strong>
          Third Stone Earning
        </strong>
        <p>
          $ {product.third_stone_earning}
        </p>
      </div>
    </div>
  </div>
);

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
  changeStatus: PropTypes.func.isRequired,
};

export default ProductInfo;
