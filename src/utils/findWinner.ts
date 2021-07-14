import { FillChars } from '../hooks/useBoard';

const winningCombos = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // diagonals
  [0, 4, 8],
  [2, 4, 6],
];

const checkCombo = (combo: number[], board: FillChars[]) =>
  board[combo[0]] === board[combo[1]] &&
  board[combo[1]] === board[combo[2]] &&
  board[combo[0]];

/** find the tic tac toe winner */
export function findWinner(board: FillChars[]) {
  for (const combo of winningCombos) {
    const winner = checkCombo(combo, board);
    if (winner) return winner;
  }

  return null;
}
