import * as React from 'react';
import { useBoard } from './hooks/useBoard';
import { MountComponents } from './components/MountComponents';
import { BoardCell } from './components/BoardCell';
import { Board } from './components/Board';

export const App = () => {
  const [game, dispatch] = useBoard();

  return (
    <MountComponents>
      <p>
        {game.winner
          ? `${game.winner} wins the game!`
          : `${game.currentTurn}'s turn to move`}
      </p>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <Board>
        {game.board.map((v, i) => (
          <BoardCell
            onClick={() => dispatch({ type: 'PLAY', payload: i })}
            disabled={!!game.winner}
            key={i}
            cellValue={v}
          />
        ))}
      </Board>
    </MountComponents>
  );
};
