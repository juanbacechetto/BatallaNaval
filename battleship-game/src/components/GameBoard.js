import React from 'react';
import PlayCell from '../containers/PlayCell';
import BOARD_DIMENSION from '../actions/data';

let arrRows = [];
for (let i = 0; i < BOARD_DIMENSION; i++) {
  arrRows.push(i);
}

const GameBoard = () => {
  return (
    <div>
      <h3 className="yourBoardTitle">
        Player
      </h3>
      <div className='table'>
        <div className='board-container'>
        {
          // builds the board row by row from Cells
          arrRows.map((y, index) => (
            <div key={index}>
              {
                arrRows.map((x) => (
                  <PlayCell
                    x={x}
                    y={y}
                    key={`${x}${y}`} />
                ))
              }
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
}
export default GameBoard;
