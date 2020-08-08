import React from 'react';
import '../index.css';

function Search({ handleInput, searchHandler }) {
  return (
    <section className="searchInput">
      <input
        type="text"
        className="searchInput"
        placeholder="What's buzzin?"
        onChange={handleInput}
        onKeyPress={searchHandler}
      />
    </section>
  );
}

export default Search;
