import React, { PropTypes } from 'react';
import classnames from 'classnames';

// Text Input, Number, Date - <input type={type} />
//
// rework!!
//

const Input = ({ label, stateKey, value, required, readOnly, type, error, onChange, children, hasFeedback, placeholder }) => (
  <div
    className={classnames('form-group', { 'has-danger': error }, { 'has-feedback': hasFeedback })}
  >
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
    {error && <span className="help-block">{error}</span>}
    {children}
  </div>
);


Input.propTypes = {
  label: PropTypes.string,
  stateKey: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
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
