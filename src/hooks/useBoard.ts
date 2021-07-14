import { useReducer } from 'react';

type State = {
  value: Array<'x' | 'o' | ''>;
  currentTurn: 'x' | 'o';
};

type Action =
  | { type: 'PLAY'; payload: number }
  | { type: 'RESET' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'PLAY':
      const newValue = [...state.value];
      if (newValue[action.payload] === '')
        newValue[action.payload] = state.currentTurn;

      return {
        currentTurn: state.currentTurn === 'x' ? 'o' : 'x',
        value: newValue,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

const initialState: State = {
  value: ['', '', '', '', '', '', '', '', ''],
  currentTurn: 'x',
};

export const useBoard = () => useReducer(reducer, initialState);
