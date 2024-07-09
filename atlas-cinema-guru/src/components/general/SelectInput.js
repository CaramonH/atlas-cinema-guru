import React from 'react'
import './general.css';

// label: String – The input label
// options: Array – Array of select options
// className: String – SelectInput custom classes
// value: Any – The controlled state
// setValue: Function – The setState function of the above state.
const SelectInput = ({label, options=[], className, value, setValue}) => {
    const handleSelect = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className={`select-input ${className || ''}`}>
      {label && <label>{label}</label>}
      <select value={value} onChange={handleSelect} className="select-element">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput
