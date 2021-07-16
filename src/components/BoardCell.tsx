import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Cross } from '../icons/Cross';
import { Nought } from '../icons/Nought';
import { CellValue } from '../hooks/useBoard';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  cellValue: CellValue;
  winnerCell: boolean | undefined;
}

const blink = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Button = styled.button`
  height: 100px;
  width: 100px;
  padding: 0;
  background-color: #1e1e1e;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &.win-cell > svg {
    animation-name: ${blink};
    animation-duration: 0.2s;
    animation-iteration-count: 3;
    animation-timing-function: cubic-bezier(1, -1, 0, 2);
  }

  &:disabled {
    cursor: default;
  }
`;

export const BoardCell = ({ cellValue, winnerCell, ...props }: Props) => {
  return (
    <Button
      {...props}
      disabled={cellValue !== 'empty' || props.disabled}
      className={`${props.className} ${winnerCell ? 'win-cell' : ''}`}
    >
      {cellValue === 'X' ? <Cross /> : cellValue === 'O' && <Nought />}
    </Button>
  );
};
