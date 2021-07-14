import * as React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';

export const MountGlobals: React.FC = props => (
  <>
    <GlobalStyles />
    {props.children}
  </>
);
