import styled from 'styled-components';

export const Wrap = styled.div`
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.modalBg};
  width: 750px;
`;

export const SubTitle = styled.h3`
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes[4]}px;
  text-align: center;
`;

export const ListItem = styled.li`
  display: block;
  padding: ${p => p.theme.space[3]}px;
`;

export const ActorImg = styled.img`
  display: block;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;

export const TextBold = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
