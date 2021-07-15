import styled, { keyframes } from 'styled-components';

export const SVG = styled.svg`
  stroke: white;
  stroke-width: 5;
  stroke-linecap: round;
  fill: none;
`;

export const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;
