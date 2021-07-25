import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { BaseSyntheticEvent, FormEvent, useState } from 'react'
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
  return (
    <div className="search">
      <input
        placeholder="Search an user"
        onChange={(e) => handleInput(e)}
        data-testid="user-search"
      />
      <button
        aria-label="search-button"
        onClick={(e) => dispatch(searchUsersAsync(input))}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
