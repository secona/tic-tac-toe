import * as React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Cross } from './icons/Cross';
import { Nought } from './icons/Nought';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Cross />
      <Nought />
    </>
  );
};
