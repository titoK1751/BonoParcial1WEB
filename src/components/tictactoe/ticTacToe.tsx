'use client';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';

type CellValue = 'X' | 'O' | null;

function TicTacToe() {
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleCellClick = (index: number) => {
    if (board[index]) {
      return;
    }

    const nextBoard = [...board];
    nextBoard[index] = isXTurn ? 'X' : 'O';

    setBoard(nextBoard);
    setIsXTurn((prev) => !prev);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm">Turno actual: {isXTurn ? 'X' : 'O'}</p>

      <div className="grid grid-cols-3 gap-2 w-fit">
        {board.map((cell, index) => (
          <Button
            key={index}
            variant="outline-dark"
            onClick={() => handleCellClick(index)}
            className="flex h-16 w-16 items-center justify-center text-xl font-bold"
          >
            {cell ?? ''}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
