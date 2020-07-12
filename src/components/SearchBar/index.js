import React from "react";
import "./style.css";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <form onSubmit={props.searchBook} action="">
        {/* on change will grab props to be used by the handleSearch method */}
        <input onChange={props.handleSearch} type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
