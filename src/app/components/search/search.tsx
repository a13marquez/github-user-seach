import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { BaseSyntheticEvent, FormEvent, KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchUsersAsync } from '../../thunks/searchUsers';

import './search.scss'

export const Search = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState('')

  const handleInput = (e: BaseSyntheticEvent) => {
    const newState = e.target.value || "";
    setInput(newState);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      dispatch(searchUsersAsync(input))
    }
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search an user"
        onChange={(e) => handleInput(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        data-testid="user-search"
      />
      <button
        aria-label="search-button"
        onClick={(e) => dispatch(searchUsersAsync(input))}
      >
        <FontAwesomeIcon icon={faSearch} size="xs" />
      </button>
    </div>
  );
}
