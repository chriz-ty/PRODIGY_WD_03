import React, { useState } from 'react';
import { Board } from './components/Board';
import { RefreshCw } from 'lucide-react';

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return squares.every(square => square) ? 'Draw' : null;
}

function App() {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? winner === 'Draw'
      ? "It's a draw!"
      : `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) return;
    
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="min-h-screen bg-emerald-950 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold text-emerald-400 mb-4">Tic Tac Toe</h1>
        
        <div className="bg-emerald-900/30 p-8 rounded-xl shadow-2xl backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-xl font-semibold text-emerald-200">{status}</div>
            <button
              onClick={resetGame}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-800 hover:bg-emerald-700 
                         text-emerald-100 rounded-lg transition-colors duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              Reset Game
            </button>
          </div>
          
          <Board squares={squares} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;