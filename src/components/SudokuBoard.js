import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Cell from './Cell';

const SudokuBoard = ({ board, onChange, onSolve }) => {
  return (
    <Container>
      <Card className="sudoku-card">
        <Card.Body>
          {board.map((row, rowIndex) => (
            <Row key={rowIndex} className="justify-content-center">
              {row.map((cell, colIndex) => (
                <Col key={colIndex} xs={1} className="p-0">
                  <Cell
                    value={cell}
                    onChange={onChange}
                    row={rowIndex}
                    col={colIndex}
                  />
                </Col>
              ))}
            </Row>
          ))}
          <Button onClick={onSolve} className="mt-3">Solve</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SudokuBoard;
