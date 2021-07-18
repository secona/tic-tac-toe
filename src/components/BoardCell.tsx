import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Cross } from '../icons/Cross';
import { Nought } from '../icons/Nought';
import { CellValue } from '../hooks/useBoard';
import { mergeClassnames } from '../utils/mergeClassnames';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  cellValue: CellValue;
  gameOver: boolean;
  cellWin: boolean;
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

  &.win > svg {
    animation-name: ${blink};
    animation-duration: 0.2s;
    animation-iteration-count: 3;
    animation-timing-function: cubic-bezier(1, -1, 0, 2);
  }

  &.lose > svg {
    opacity: 10%;
  }

  &:disabled {
    cursor: default;
  }
`;

export const BoardCell = React.memo(
  ({ cellValue, gameOver, cellWin, ...props }: Props) => {
    return (
      <Button
        {...props}
        disabled={cellValue !== 'empty' || gameOver}
        className={mergeClassnames([
          props.className,
          gameOver && (cellWin ? 'win' : 'lose'),
        ])}
      >
        {cellValue === 'X' ? <Cross /> : cellValue === 'O' && <Nought />}
      </Button>
    );
  },
  (prev, next) => {
    return (
      prev.cellValue === next.cellValue &&
      prev.gameOver === next.gameOver &&
      prev.cellWin === next.cellWin
    );
  }
);
