import React, { PropTypes } from 'react';

// Text Input, Number, Date - <input type={type} />
//
// rework!!
//

const Input = ({ label, stateKey, value, required, readOnly, type, onChange, placeholder }) => (
  <div className="form-group">
    {label
      ? <label className="control-label" htmlFor={stateKey}>
        {label}
      </label>
      : null}

    <input
      required={required}
      id={stateKey}
      name={stateKey}
      className="form-control"
      type={type}
      readOnly={readOnly}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);


Input.propTypes = {
  label: PropTypes.string,
  stateKey: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]),
  type: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  children: PropTypes.object,
  hasFeedback: PropTypes.bool,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
