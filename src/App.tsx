import * as React from 'react';
import { useBoard } from './hooks/useBoard';
import { MountComponents } from './components/MountComponents';
import { BoardItem } from './components/BoardItem';
import { Board } from './components/Board';

export const App = () => {
  const [state, dispatch] = useBoard();

  return (
    <MountComponents>
      <span>{state.currentTurn}'s turn to move</span>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <Board>
        {state.value.map((v, i) => (
          <BoardItem
            key={i}
            value={v}
            onClick={() => dispatch({ type: 'PLAY', payload: i })}
          />
        ))}
      </Board>
    </MountComponents>
  );
};
