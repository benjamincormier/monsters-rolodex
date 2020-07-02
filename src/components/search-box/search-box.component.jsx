import React from 'react';

import './search-box.styles.css';

export const SearchBox = (
    { placeholder, handleChange } //destructuring on the propos object that is passed in
) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
);
