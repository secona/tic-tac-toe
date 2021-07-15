import * as React from 'react';
import styled from 'styled-components';
import { SVG, draw } from './shared';

const SVGWithAnim = styled(SVG)`
  .line {
    stroke-dasharray: 85;
    stroke-dashoffset: 85;
    animation: ${draw} 0.15s ease-in-out forwards;

    &.draw-after {
      animation-delay: 0.15s;
    }
  }
`;

export const Cross = () => (
  <SVGWithAnim height='100' width='100'>
    <line className='line' x1='20' y1='20' x2='80' y2='80' />
    <line className='line draw-after' x1='80' y1='20' x2='20' y2='80' />
  </SVGWithAnim>
);
