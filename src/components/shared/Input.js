import React, { PropTypes } from 'react';
import classnames from 'classnames';

// Text Input, Number, Date - <input type={type} />

const Input = ({ label, stateKey, value, required, readOnly, type, error, onChange }) => (
  <div className={classnames('form-group', { 'has-danger': error })}>
    <label className="control-label" htmlFor={stateKey}>
      {label}
    </label>
    <input
      required={required}
      id={stateKey}
      name={stateKey}
      className="form-control"
      type={type}
      readOnly={readOnly}
      value={value}
      onChange={onChange}
    />
    {error && <span className="help-block">{error}</span>}
  </div>
);


Input.propTypes = {
  label: PropTypes.string.isRequired,
  stateKey: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
