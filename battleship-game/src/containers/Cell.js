import React from 'react';
import {connect} from 'react-redux';
import {changeSelectedCell, placeShipOnBoard, relocateShip} from '../actions/actionsCreators';
import BOARD_DIMENSION from '../actions/data';
import '../styles/board.css';

// Cells make the board
let Cell = (props)=> {
// hoverCell shows the possible position of the ship according to size
  const hoverCell = (e) => {
    if (props.selectedShipIndex > -1) {
    // array distructuring
    let [x, y] = e.target.id.split('-');
    if (x) {
      // where the cursor actually is (info from the mouseOver event)
      x = parseInt(x, 10);  
      y = parseInt(y, 10);
    }
// if there is a ship selected
      const size = props.ships[props.selectedShipIndex].size;
      // diff: to teleytaio index gia na xwraei to ship sti grammi -> ola - size
      const diff = BOARD_DIMENSION - size;
      if (props.ships[props.selectedShipIndex].isHorizontal) {
        // check if the ship does not fit in the line
        if (x + size > BOARD_DIMENSION) {
          x = diff;
        }
      } else {
        if (y + size > BOARD_DIMENSION) {
          y = diff;
        }
      }
      // changes the selected cell - the first cell for the ship to fit the line
      props.changeSelectedCell(x, y);
    }
  }
// clickOnBoard chooses the ships position - this is the first cell of the ship
  const clickOnBoard = (e) => {
    // if there is a ship and you need to relocate it
    let [x, y] = e.target.id.split('-');
    // value is the ship id that is written in the matrix
    let value = props.matrix[parseInt(y, 10)][parseInt(x, 10)];
    if (value !== null) {
      return props.relocateShip(value);
    }
    if (props.selectedShipIndex > -1) {
      // check if there is a cell that is already occupied by another ship
      const x = props.selectedCell.x;
      const y = props.selectedCell.y;
      const size = props.ships[props.selectedShipIndex].size;
      if (props.ships[props.selectedShipIndex].isHorizontal) {
        for (let i = x; i < x + size; i++) {
          if (props.matrix[y][i] !== null) {
            return;
          }
        }
      } else {
        for (let i = y; i < y + size; i++) {
          if (props.matrix[i][x] !== null) {
            return;
          }
        }
      }
      // places the ship on the selected cell according to its orientation -> matrix cell value = shipIndex
      props.placeShipOnBoard();
//      props.deselectShipIndex();
    }
  }
  // changes the color of the cell on the ship hover
  let styleForShip = 'cell';
  if (props.selectedShipIndex > -1) {
    // props.x starts from 0
    if (props.matrix[props.y][props.x] != null) {
      styleForShip += ' cellShip';
    } else {
      // if the ship is horizontal
      if (props.ships[props.selectedShipIndex].isHorizontal) {
        // totalX: index of the ship's last cell
        const totalX = props.selectedCell.x + props.ships[props.selectedShipIndex].size;
        if (props.y === props.selectedCell.y
          // on the same line add style from the selected cell to the last cell of the ship
          && props.x >= props.selectedCell.x && props.x < totalX) {
          styleForShip += ' cellHover';
        }
      } else {
      // if the ship is vertical
        const totalY = props.selectedCell.y + props.ships[props.selectedShipIndex].size;
        if (props.x === props.selectedCell.x
          && props.y >= props.selectedCell.y && props.y < totalY) {
          styleForShip += ' cellHover';
        }
      }
    }
  }
  return (
    <div id={`${props.x}-${props.y}`}
      onMouseOver={hoverCell}
      onClick={clickOnBoard}
      className={styleForShip}>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ships: state.ships,
    selectedShipIndex: state.selectedShipIndex,
    selectedCell: state.selectedCell,
    matrix: state.matrix
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedCell: (x, y) => {
      dispatch(changeSelectedCell(x, y))
    },
    placeShipOnBoard: (x, y) => {
      dispatch(placeShipOnBoard(x, y))
    },
    relocateShip: (id) => {
      dispatch(relocateShip(id))
    },
  }
};
Cell = connect(mapStateToProps, mapDispatchToProps)(Cell);
export default Cell;
