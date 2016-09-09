import React, { PropTypes } from 'react';

function renderOptions(data) {
  return data.map(row => (
    <option value={row.value} key={row.value}>{row.label}</option>
    )
  );
}

const Select = ({ label, value, data, onChange, stateKey }) => (
  <div>
    <label className="col-form-label" htmlFor={label}>{label}</label>
    <select value={value} onChange={onChange} className="form-control" name={stateKey}>
      {renderOptions(data)}
    </select>
  </div>
);

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  stateKey: PropTypes.string,
};

export default Select;
