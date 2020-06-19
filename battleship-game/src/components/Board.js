import React from 'react';
import Cell from '../containers/Cell';
import BOARD_DIMENSION from '../actions/data';
import '../styles/board.css';

const arrRows = [];
for (let i = 0; i < BOARD_DIMENSION; i++) {
  arrRows.push(i);
}
//creates an array of the head letter
const arrCols = [];
for (let i = 0; i < BOARD_DIMENSION; i++){
  arrCols.push(String.fromCharCode(65 + i));
}
// represents the sea, where the ships are placed
const Board = () => (
    <div>
      <h3>
        This is the game board
      </h3>
      <div className='table'>
        <div className='rowNumber'></div>
        {
          arrCols.map((letter, index) => (
            // the head letters
            <div className='cell colNumber' key={index}>{letter}</div>
          ))
        }
          {
            // builds the board row by row from Cells
            arrRows.map((y, index)=> (
              <div key={index}>
                <div className='rowNumber'>{y + 1}</div>
                {
                  arrRows.map((x)=> (
                    <Cell
                      x={x}
                      y={y}
                      key={`${x}${y}`}/>
                  ))
                }
              </div>
            ))
          }
      </div>
    </div>
  );
export default Board;
/*<table className='table'>
  <caption className='caption'>
    Place your ships to start the game!
  </caption>
  <thead>
     <th></th>
    {
      arrCols.map((el)=> (
        <th scope='col' style={{margin: '0px'}}>{el}</th>
      ))
    }
  </thead>
  <tbody>
    {
      arrRows.map((elem)=> (
        <tr>
          <th scope='row'>{elem}</th>
          {
            arrRows.map((el)=> (
              <td>{<Cell />}</td>
            ))
          }
        </tr>
      ))
    }
  </tbody>
</table> */

