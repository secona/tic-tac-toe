import { State, Winner } from '../hooks/useBoard';

export const getGameMessage = (
  turn: State['currentTurn'],
  winner: Winner['value']
) => {
  switch (winner) {
    case 'tie':
      return 'Tie!';
    case 'not-found':
      return `${turn}'s turn to play`;
    default:
      return `${winner} wins the game!`;
  }
};
