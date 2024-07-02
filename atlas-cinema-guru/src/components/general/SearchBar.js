import React from 'react'
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// title: String – The controlled state
// setTitle: String – The setState function of the above state.
const SearchBar = ({title, setTitle}) => {
    const handleInput = (event) => {
    setTitle(event.target.value)
  }
  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input 
        type="text"
        placeholder="Search..."
        value={title}
        onChange={handleInput} 
        />
      </div>
    </div>
  )
}

export default SearchBar
