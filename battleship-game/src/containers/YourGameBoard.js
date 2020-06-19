import React from 'react';
import YourCell from './YourCell';
import BOARD_DIMENSION from '../actions/data';

let arrRows = [];

for (let i = 0; i < BOARD_DIMENSION; i++) {
  arrRows.push(i);
}

const YourGameBoard = () => {
  return (
    <div>
      <h3 className="yourBoardTitle">
        CPU
      </h3>
      <div className='smallTable'>
        <div className='board-container'>
          {
            // Use Cell for build the Board
            arrRows.map((y, index) => (
              <div key={index}>
                {
                  arrRows.map((x) => (
                    <YourCell
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
};
export default YourGameBoard;
