import React from "react";

const Header = (props) => {
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <header className="app-header">
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new" onClick={props.addNote}>
          + New Note
        </button>
        <input
          onChange={callSearch}
          type="text"
          placeholder="Type here to search..."
          className="search"
          value={props.searchText}
        />
      </aside>
    </header>
  );
};

export default Header;
