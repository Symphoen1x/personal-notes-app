import React from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="search-bar-container" style={{ position: 'relative' }}>
      <FiSearch style={{ position: 'absolute', top: '14px', left: '16px', color: 'var(--text-secondary)', fontSize: '18px' }} />
      <input
        type="text"
        placeholder="Cari berdasarkan judul..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
        style={{ paddingLeft: '44px' }}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}

export default SearchBar;
