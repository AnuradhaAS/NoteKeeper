import React, { useState } from 'react';
import ProfileInfo from '../Cards/ProfileInfo';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ userInfo, onSearchNote }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const onLogout = () => {
    localStorage.removeItem("token");   
  navigate("/login");
  };

  const handleSearch = () => {
    if (onSearchNote && searchQuery) {
      onSearchNote(searchQuery);
    }
    console.log("Searching for:", searchQuery);
  };

  const onClearSearch = () => {
    setSearchQuery("");
    if (onSearchNote) {
      onSearchNote(""); // Optionally clear the search results
    }
  };

  return (
    <div className="navbar">
      <h2 className="navbar-title">Note Keeper</h2>
      <SearchBar 
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
