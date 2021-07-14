import * as React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';

export const MountComponents: React.FC = props => (
  <>
    <GlobalStyles />
    {props.children}
  </>
);
