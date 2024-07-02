import React from 'react'
import './general.css';

// label: String – The button label
// className: String – Button custom classes
// onClick: Function – The onClick handler for the button.
// icon(optional): FontAwesomeIcon – An icon to decorate the button with.
const Button = ({label, className, onClick, icon}) => {
  return (
    <button className="custom-button" onClick={onClick}>
        {label}
    </button>
  )
}

export default Button;
