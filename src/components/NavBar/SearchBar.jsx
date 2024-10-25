import React from "react";
import "./NavBar.css";

import { HiMagnifyingGlass } from "react-icons/hi2";


const SearchBar = () => {


  return (
    <div className="search-container">
      <HiMagnifyingGlass />
      <input type="text" placeholder="Search for a country..."></input>
    </div>
  );
};

export default SearchBar;
