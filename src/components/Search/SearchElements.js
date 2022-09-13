import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
`;

export const SearchLabel = styled.label`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const SearchInput = styled.input`
  font-size: 15px;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  background: rgba(232, 230, 227, 0.7);
  border-radius: 10px;
  color: #2a2d2f;

  @media only screen and (max-width: 500px) {
    max-width: 150px;
  }
`;

export const SearchButton = styled.button`
  font-size: 15px;
  display: none;
`;
