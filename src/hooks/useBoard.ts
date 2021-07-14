import { useReducer } from 'react';
import { findWinner } from '../utils/findWinner';

export type FillChars = 'X' | 'O' | null
export type State = {
  board: FillChars[];
  currentTurn: 'X' | 'O';
  winner: FillChars;
};

export type Action =
  | { type: 'PLAY'; payload: number }
  | { type: 'RESET' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'PLAY':
      const board = [...state.board];
      if (board[action.payload] === null)
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
  board: Array(9).fill(null),
  currentTurn: 'X',
  winner: null,
};

export const useBoard = () => useReducer(reducer, initialState);
