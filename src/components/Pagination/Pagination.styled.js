import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const PaginationRow = styled(ReactPaginate)`
  padding: ${p => p.theme.space[3]}px;
  display: flex;
  align-items: center;
  justify-content: center;

  li a {
    font-family: inherit;
    border-radius: ${p => p.theme.radii.med};
    padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
    border: 1px solid ${p => p.theme.colors.textP};
    background-color: ${p => p.theme.colors.btnBg};

    cursor: pointer;
  }
  li.previous a,
  li.next a {
    border: 1px solid ${p => p.theme.colors.textP};
    background-color: ${p => p.theme.colors.bg};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.textP};
  }
  li.selected a {
    background-color: ${p => p.theme.colors.textP};
    color: ${p => p.theme.colors.modalBg};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
