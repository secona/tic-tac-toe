import styled from 'styled-components';

export const Board = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 0.5rem;
`;