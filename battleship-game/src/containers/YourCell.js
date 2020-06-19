import React from 'react';
import {connect} from 'react-redux';

let YourCell = (props) => {
  // changes the color of the cell where your ships are located
  let styleForShip = 'cell cellSmaller';
  const cell = props.matrix[props.y][props.x];
    if (cell === 'X') {
      styleForShip += ' cellHit';
    } else if (cell === 'o') {
      styleForShip += ' cellMissed';
    } else if (typeof(cell) === 'number') {
      styleForShip += ' cellShip';
    }

  return (
    <div id={`${props.x}-${props.y}`}
      className={styleForShip}>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    matrix: state.matrix
  };
};
YourCell = connect(mapStateToProps)(YourCell);
export default YourCell;