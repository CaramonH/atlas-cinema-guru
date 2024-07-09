import React from 'react';
import './movies.css';
import Tag from './Tag';

const Filter = ({ 
  minYear, 
  setMinYear, 
  maxYear, 
  setMaxYear, 
  sort, 
  setSort, 
  genres, 
  setGenres, 
  title, 
  setTitle 
}) => {

  const handleMinYearChange = (e) => setMinYear(e.target.value);
  const handleMaxYearChange = (e) => setMaxYear(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);

  const allTags = ['action', 'drama', 'comedy', 'biography', 'romance', 'thriller', 'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy'];

  return (
    <div className="filter">
      <div className="search-bar">
        <input 
          type="text" 
          value={title} 
          onChange={handleTitleChange} 
          placeholder="Search by title" 
        />
      </div>
      <div className="year-inputs">
        <input 
          type="number" 
          value={minYear} 
          onChange={handleMinYearChange} 
          placeholder="Min Year" 
        />
        <input 
          type="number" 
          value={maxYear} 
          onChange={handleMaxYearChange} 
          placeholder="Max Year" 
        />
      </div>
      <div className="sort-input">
        <select value={sort} onChange={handleSortChange}>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="highestrated">Highest Rated</option>
          <option value="lowestrated">Lowest Rated</option>
        </select>
      </div>
      <div className="tags">
        {allTags.map((genre) => (
          <Tag 
            key={genre} 
            genre={genre} 
            filter={true} 
            genres={genres} 
            setGenres={setGenres} 
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;