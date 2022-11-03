import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.bg};
  /* min-height: ${p => p.theme.sizes.h.full}; */
`;

export const Nav = styled.nav`
  text-align: center;
  border-bottom: ${p => p.theme.borders.primary};
  border-bottom-color: ${p => p.theme.colors.border};
  padding: ${p => p.theme.space[2]}px;
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  padding: ${p => p.theme.space[0]}px;
  color: ${p => p.theme.colors.textP};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  text-transform: uppercase;
  transition: color 400ms ease-in-out;

  :not(:first-child) {
    margin-left: ${p => p.theme.space[5]}px;
  }

  :hover:not(.active) {
    color: ${p => p.theme.colors.hover};
  }

  &.active {
    border-bottom: ${p => p.theme.borders.secondary};
  }
`;
