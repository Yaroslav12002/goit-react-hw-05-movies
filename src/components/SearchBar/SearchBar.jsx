import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';

export function SearchBar({ onSubmit }) {
  const [textForSearch, setTextForSearchImage] = useState('');

  const handleTextForSearchChange = event => {
    setTextForSearchImage(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (textForSearch.trim() === '') {
      alert('Please enter some text');
      return;
    }
    onSubmit(textForSearch);
    setTextForSearchImage('');
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          value={textForSearch}
          onChange={handleTextForSearchChange}
          placeholder="Search movie"
        />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </SearchbarHeader>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
