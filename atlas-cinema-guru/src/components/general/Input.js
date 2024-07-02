import React from 'react'
import './general.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// label: String – The input label
// type: String – Input type
// className: String – Input custom classes
// value: Any – The controlled state
// setValue: Function – The setState function of the above state.
// icon(optional): FontAwesomeIcon – An icon to decorate the input with.
// inputAttributes(optional): Object – Other input attributes
const Input = ({label, type, className, value, setValue, icon, inputAttributes}) => {
  const handleInput = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className="input-container">
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        {icon && <FontAwesomeIcon icon={icon}/>}
        <input
        type={type}
        value={value}
        onChange={handleInput}
        {...inputAttributes}/>
      </div>
    </div>
  )
}

export default Input
