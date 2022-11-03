import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Modal = styled.div`
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.modalBg};
  width: 750px;
`;

export const ModalImg = styled.img`
  display: block;
  height: auto;
  margin-right: ${p => p.theme.space[3]}px;
`;

export const TextWrap = styled.div`
  padding: ${p => p.theme.space[2]}px;
`;

export const FilmTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[4]}px;
`;

export const SubTitle = styled.h3`
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const Genre = styled.li`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const AddLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.textP};
  transition: color 400ms ease-in-out;

  :hover:not(.active) {
    color: ${p => p.theme.colors.hover};
  }

  &.active {
    border-bottom: ${p => p.theme.borders.secondary};
  }

  :not(:first-child) {
    margin-left: ${p => p.theme.space[4]}px;
  }
`;
