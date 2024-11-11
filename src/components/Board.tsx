import React from 'react';
import { Square } from './Square';
import { X, Circle } from 'lucide-react';

interface BoardProps {
  squares: (string | null)[];
  onClick: (i: number) => void;
}

export function Board({ squares, onClick }: BoardProps) {
  const renderSquare = (i: number) => {
    return (
      <Square key={i} value={squares[i]} onClick={() => onClick(i)}>
        {squares[i] === 'X' ? (
          <X className="w-12 h-12 text-emerald-400" />
        ) : squares[i] === 'O' ? (
          <Circle className="w-12 h-12 text-emerald-200" />
        ) : null}
      </Square>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-2 bg-black/20 p-2 rounded-lg">
      {[...Array(9)].map((_, i) => renderSquare(i))}
    </div>
  );
}