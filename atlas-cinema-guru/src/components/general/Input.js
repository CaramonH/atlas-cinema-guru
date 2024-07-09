import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// label: String – The input label
// type: String – Input type
// className: String – Input custom classes
// value: Any – The controlled state
// setValue: Function – The setState function of the above state.
// icon(optional): FontAwesomeIcon – An icon to decorate the input with.
// inputAttributes(optional): Object – Other input attributes
const Input = ({label, type, className, value, setValue, icon, inputAttributes, togglePassword, isPasswordVisible, showPasswordToggle}) => {
  const handleInput = (event) => {
    setValue(event.target.value)
  }
  
  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

  return (
    <div className={`input-group ${className || ''}`}>
      <div className="label-icon-wrapper">
        {icon && <FontAwesomeIcon icon={icon} className="icon-default" />}
        {label && <label>{label}</label>}
      </div>
      <div className="input-wrapper">
        <input
          type={inputType}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
        {showPasswordToggle && type === 'password' && (
          <FontAwesomeIcon
            icon={isPasswordVisible ? faEye : faEyeSlash}
            onClick={togglePassword}
            className="toggle-password-icon"
          />
        )}
      </div>
    </div>
  );
}

export default Input;
