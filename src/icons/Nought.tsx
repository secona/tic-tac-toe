import * as React from 'react';
import styled from 'styled-components';
import { SVG, draw } from './shared';

const SVGWithAnim = styled(SVG)`
  .circle {
    stroke-dasharray: 220;
    stroke-dashoffset: 220;
    animation: ${draw} 0.45s ease-in-out forwards;
  }
`;

export const Nought = () => (
  <SVGWithAnim height='100' width='100'>
    <circle
      className='circle'
      cx='50'
      cy='50'
      r='35'
      transform='rotate(-90) scale(1, -1)'
      transform-origin='center'
    />
  </SVGWithAnim>
);
