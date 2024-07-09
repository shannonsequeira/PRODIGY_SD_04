const isSafe = (board, row, col, num) => {
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num || board[x][col] === num) {
        return false;
      }
    }
  
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i + startRow][j + startCol] === num) {
          return false;
        }
      }
    }
  
    return true;
  };
  
  const solveSudokuUtil = (board, row, col) => {
    if (row === 9 - 1 && col === 9) {
      return true;
    }
  
    if (col === 9) {
      row++;
      col = 0;
    }
  
    if (board[row][col] !== 0) {
      return solveSudokuUtil(board, row, col + 1);
    }
  
    for (let num = 1; num <= 9; num++) {
      if (isSafe(board, row, col, num)) {
        board[row][col] = num;
        if (solveSudokuUtil(board, row, col + 1)) {
          return true;
        }
      }
      board[row][col] = 0;
    }
    return false;
  };
  
  export const solveSudoku = (board) => {
    const copiedBoard = board.map((row) => row.slice());
    if (solveSudokuUtil(copiedBoard, 0, 0)) {
      return copiedBoard;
    }
    return null;
  };
  