import React from "react";
import {
  SearchForm,
  SearchLabel,
  SearchInput,
  SearchButton,
} from "./SearchElements";

const Search = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <SearchForm action="/" method="get">
      <SearchLabel htmlFor="navbar-search">
        <span>Search Skins</span>
      </SearchLabel>
      <SearchInput
        type="text"
        id="navbar-search"
        placeholder="Search Bundle"
        name="s"
        onChange={(e) => props.setQuery(e.target.value)}
      />
      <SearchButton type="submit" onClick={onSubmitHandler}>
        Search
      </SearchButton>
    </SearchForm>
  );
};

export default Search;
