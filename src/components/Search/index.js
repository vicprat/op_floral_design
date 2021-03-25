import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';
import { Input } from '../Input';
import { Button } from '../Button';
import { SearchForm } from './styles';

export const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { search } = useLocation();
  const c = queryString.parse(search)?.c || '';

  const handleSubmit = e => {
    e.preventDefault();

    if (c) {
      navigate(
        `/products?s=${encodeURIComponent(searchTerm)}&c=${encodeURIComponent(
          c
        )}`
      );
    } else {
      navigate(`/products?s=${encodeURIComponent(searchTerm)}`);
    }
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        value={searchTerm}
        onChange={e => setSearchTerm(e.currentTarget.value)}
        placeholder="Buscar"
      />
      <Button>
        <FaSearch />
      </Button>
    </SearchForm>
  );
};
