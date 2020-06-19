import React from 'react';
import Cell from '../containers/Cell';
import BOARD_DIMENSION from '../actions/data';
import '../styles/board.css';

const arrRows = [];
for (let i = 0; i < BOARD_DIMENSION; i++) {
  arrRows.push(i);
}

//represents the Sea
const Board = () => (
  <div>
    <div className='table'>
      {
        // builds the board row by row from Cells
        <div className='board-container'>
        {
          arrRows.map((y, index) => (
          <div key={index}>
            {
              arrRows.map((x) => (
                <Cell
                  x={x}
                  y={y}
                  key={`${x}${y}`} />
              ))
            }
          </div>
          
        ))
        }
        </div>
      }
    </div>
  </div>
);
export default Board;

