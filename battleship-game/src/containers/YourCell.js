import React from 'react';
import {connect} from 'react-redux';

let YourCell = (props) => {
  // changes the color of the squares where your ships are located
  let styleForShip = 'square squareSmaller';
  const cell = props.matrix[props.y][props.x];
    if (cell === 'X') {
      styleForShip += ' squareHit';
    } else if (cell === 'o') {
      styleForShip += ' squareMissed';
    } else if (typeof(cell) === 'number') {
      styleForShip += ' squareShip';
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