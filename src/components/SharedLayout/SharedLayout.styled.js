import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav``;

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

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;
