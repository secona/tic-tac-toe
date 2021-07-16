import * as React from 'react';
import styled from 'styled-components';
import { useBoard } from './hooks/useBoard';
import { Container } from './components/Container';
import { BoardCell } from './components/BoardCell';
import { Button } from './components/Button';
import { Board } from './components/Board';
import { getGameMessage } from './utils/getGameMessage';

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  & > * {
    margin: 0;
  }
`;

export const App = () => {
  const [game, dispatch] = useBoard();

  return (
    <Container>
      <Topbar>
        <p>{getGameMessage(game.currentTurn, game.winner.value)}</p>
        <Button onClick={() => dispatch({ type: 'RESET' })}>Reset</Button>
      </Topbar>
      <Board>
        {game.board.map((v, i) => (
          <BoardCell
            onClick={() => dispatch({ type: 'PLAY', payload: i })}
            disabled={['X', 'O'].indexOf(game.winner.value) >= 0}
            winnerCell={game.winner.combo?.includes(i)}
            cellValue={v}
            key={i}
          />
        ))}
      </Board>
    </Container>
  );
};
