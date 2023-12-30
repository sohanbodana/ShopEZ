// SearchBar.js
import React from 'react';

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="search-bar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search for products 🔎"
        aria-label="Search"
        value={searchQuery}
        onChange={handleSearch}
        style={{ border: '3px solid black' }}
      />
    </div>

  );
};

export default SearchBar;
