import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemLink = styled(Link)`
  display: block;
  width: 50%;
  margin-right: auto;
  padding: 5px 5px;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    color: white;
    background-color: orange;
  }
`;
