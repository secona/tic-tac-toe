import { useReducer } from 'react';
import { findWinner } from '../utils/findWinner';

export type CellValue = 'X' | 'O' | 'empty';
export type Winner = {
  value: 'X' | 'O' | 'tie' | 'not-found',
  combo?: number[]
};

export type State = {
  board: CellValue[];
  currentTurn: 'X' | 'O';
  winner: Winner;
};

export type Action =
  | { type: 'PLAY'; payload: number }
  | { type: 'RESET' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'PLAY':
      const board = [...state.board];
      if (board[action.payload] === 'empty')
        board[action.payload] = state.currentTurn;

      return {
        currentTurn: state.currentTurn === 'X' ? 'O' : 'X',
        winner: findWinner(board),
        board,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

const initialState: State = {
  board: Array(9).fill('empty'),
  currentTurn: 'X',
  winner: { value: 'not-found' },
};

export const useBoard = () => useReducer(reducer, initialState);
