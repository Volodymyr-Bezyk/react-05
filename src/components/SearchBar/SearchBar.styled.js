import styled from 'styled-components';

export const InputField = styled.input`
  padding: ${p => p.theme.space[1]}px;
  height: ${p => p.theme.sizes.h.min};
  width: ${p => p.theme.sizes.w.min};
  margin-right: ${p => p.theme.space[1]}px;

  border-radius: ${p => p.theme.radii.med};
  border-color: ${p => p.theme.colors.textP};
  outline: none;
  background-color: ${p => p.theme.colors.btnBg};
  font-size: ${p => p.theme.fontSizes[3]}px;

  :placeholder {
    font-size: ${p => p.theme.fontSizes[2]}px;
    color: ${p => p.theme.colors.textP};
  }
`;

export const FindBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  svg {
    transition: color 300ms ease-in-out;
    color: ${p => p.theme.colors.textP};
  }

  :hover,
  :focus {
    svg {
      color: ${p => p.theme.colors.hover};
    }
  }
`;
