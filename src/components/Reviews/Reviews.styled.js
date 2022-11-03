import styled from 'styled-components';

export const Wrap = styled.div`
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.modalBg};
  width: 750px;
`;

export const Title = styled.h3`
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes[4]}px;
  text-align: center;
`;

export const AuthorName = styled.h3`
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-style: italic;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.bg};
`;
