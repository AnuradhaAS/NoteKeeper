import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import './SearchBar.css';

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search Notes"
        className="search-input"
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose
          className="clear-icon"
          onClick={onClearSearch}
        />
      )}
      <FaMagnifyingGlass
        className="search-icon"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
