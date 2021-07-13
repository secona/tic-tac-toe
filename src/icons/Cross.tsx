import * as React from 'react';
import { SVG } from './SVG';

export const Cross = () => (
  <SVG height='100' width='100'>
    <line x1='20' y1='20' x2='80' y2='80' />
    <line x1='80' y1='20' x2='20' y2='80' />
  </SVG>
);
