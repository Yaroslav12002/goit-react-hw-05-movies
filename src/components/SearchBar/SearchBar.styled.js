import styled from 'styled-components';

export const SearchbarHeader = styled.header`
  display: flex;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;

  cursor: pointer;
  border: 1px solid black;

  :hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
  margin-right: 10px;
  display: inline-block;
  width: 100%;

  font: inherit;
  font-size: 16px;

  transition: border-color 250ms ease;
  &:focus {
    border-color: blue;
    outline: none;
  }

  &::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;
