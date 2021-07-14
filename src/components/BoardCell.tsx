import * as React from 'react';
import styled from 'styled-components';
import { Cross } from '../icons/Cross';
import { Nought } from '../icons/Nought';
import { FillChars } from '../hooks/useBoard';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  cellValue: FillChars;
}

const Button = styled.button`
  height: 100px;
  width: 100px;
  padding: 0;
  background-color: #1e1e1e;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

export const BoardCell = ({ cellValue, ...props }: Props) => {
  return (
    <Button {...props} disabled={cellValue !== null || props.disabled}>
      {cellValue === 'X' ? <Cross /> : cellValue === 'O' && <Nought />}
    </Button>
  );
};
