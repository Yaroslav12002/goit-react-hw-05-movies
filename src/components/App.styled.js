import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 700;
  font-size: 30px;
  text-decoration: none;
  margin-bottom: 30px;

  &.active {
    color: red;
  }
  &:not(last-child) {
    margin-right: 30px;
  }
`;
