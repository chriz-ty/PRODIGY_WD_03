import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
  children: React.ReactNode;
}

export function Square({ onClick, children }: SquareProps) {
  return (
    <button
      className="w-24 h-24 bg-black/40 hover:bg-black/60 transition-colors duration-200 
                 flex items-center justify-center rounded-md border-2 border-emerald-900/50"
      onClick={onClick}
    >
      {children}
    </button>
  );
}