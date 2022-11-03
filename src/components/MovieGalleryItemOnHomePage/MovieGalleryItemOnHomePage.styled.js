import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardLink = styled(Link)`
  display: block;
  transition: transform 400ms ease-in-out;
  :hover {
    transform: scale(1.1);
    p {
      color: ${p => p.theme.colors.hoverText};
    }
  }
`;

export const Title = styled.p`
  position: absolute;
  bottom: 5%;
  left: 10%;
  color: ${p => p.theme.colors.title};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes[2]}px;
  text-decoration: underline;
  transition: color 400ms ease-in-out;
`;

export const Img = styled.img`
  max-width: 100%;
  display: block;
`;
