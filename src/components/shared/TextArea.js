import React, { PropTypes } from 'react';

const TextArea = ({ label, stateKey, value, required, readOnly, onChange }) => (
  <div className="form-group">
    <label className="control-label" htmlFor={stateKey}>
      {label}
    </label>
    <textarea
      rows={3}
      id={stateKey}
      name={stateKey}
      required={required}
      className="form-control"
      type="text"
      readOnly={readOnly}
      value={value}
      onChange={onChange}
    />
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string,
  stateKey: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
