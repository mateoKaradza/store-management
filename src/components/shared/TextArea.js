import React, { PropTypes } from 'react';
import classnames from 'classnames';

const TextArea = ({ label, stateKey, value, required, readOnly, error, updateState }) => (
  <div className={classnames('form-group', { 'has-error': error })}>
    <label className="control-label" htmlFor={stateKey}>
      {label}
    </label>
    <textarea
      rows={4}
      id={stateKey}
      name={stateKey}
      required={required}
      className="form-control"
      type="text"
      readOnly={readOnly}
      value={value}
      onChange={updateState}
    />
    {error && <span className="help-block">{error}</span>}
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  stateKey: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  readOnly: PropTypes.bool,
  updateState: PropTypes.function.isRequired,
  error: PropTypes.string,
};

export default TextArea;
