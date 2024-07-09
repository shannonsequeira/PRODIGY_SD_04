import React, { useState } from 'react';
import Title from './components/Title';
import SudokuBoard from './components/SudokuBoard';
import { solveSudoku } from './solver';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(Array(9).fill(0)));

  const handleChange = (row, col, value) => {
    const newBoard = board.map((r, rowIndex) =>
      rowIndex === row
        ? r.map((c, colIndex) => (colIndex === col ? value : c))
        : r
    );
    setBoard(newBoard);
  };

  const handleSolve = () => {
    const solvedBoard = solveSudoku(board);
    if (solvedBoard) {
      setBoard(solvedBoard);
    } else {
      alert('No solution found!');
    }
  };

  return (
    <div className="App">
      <Title />
      <SudokuBoard board={board} onChange={handleChange} onSolve={handleSolve} />
    </div>
  );
};

export default App;
