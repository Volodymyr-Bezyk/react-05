import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[4]}px;
  text-decoration: underline;
`;

export const HomeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
  width: 300px;
  height: 50px;
  border-radius: ${p => p.theme.radii.med};
  background-color: ${p => p.theme.colors.btnBg};
  color: ${p => p.theme.colors.textP};
  border-color: ${p => p.theme.colors.textP};
  transition: background-color 400ms ease-in-out;
  cursor: pointer;
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[3]}px;

  :hover {
    background-color: ${p => p.theme.colors.btnHover};
  }
`;
