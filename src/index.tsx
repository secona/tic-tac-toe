import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { MountGlobals } from './components/MountGlobals';

render(
  <MountGlobals>
    <App />
  </MountGlobals>,
  document.getElementById('root')
);
