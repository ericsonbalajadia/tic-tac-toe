import { useState } from 'react';
import Board from './Components/Board';
import './App.css';
import Game from './Components/Game';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handlePlay(nextSquares: (string | null)[]) {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="app">
      <Game />
      <div className="game-board">
        <Board squares={squares} onPlay={handlePlay} xIsNext={xIsNext} />
      </div>
    </div>
  );
}

export default App;