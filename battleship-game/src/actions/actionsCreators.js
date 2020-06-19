import {SELECT_SHIP, CHANGE_SHIP_ORIENTATION, CHANGE_SELECTED_CELL, PLACE_SHIP_ON_BOARD, RELOCATE_SHIP,
    OPPONENT_SETUP, CHANGE_CELL_TARGET, THROW_BOMB, OPPONENT_PLAY, PLAY_AGAIN} from './actionsTypes';
  import opponentMove from '../helpers/opponentMove';
  
  const selectShip = (id)=> {
    return {
      type: SELECT_SHIP,
      id
    };
  };
  const changeShipOrientation = ()=> {
    return {
      type: CHANGE_SHIP_ORIENTATION,
    };
  };
  const changeSelectedCell = (x, y)=> {
    return {
      type: CHANGE_SELECTED_CELL,
      x,
      y
    };
  };
  const placeShipOnBoard = ()=> {
    return {
      type: PLACE_SHIP_ON_BOARD,
    };
  };
  const relocateShip = (id)=> {
    return {
      type: RELOCATE_SHIP,
      id
    };
  };
  const opponentSetup = () => {
    return {
      type: OPPONENT_SETUP
    };
  };
  const changeCellTarget = (x, y) => {
    return {
      type: CHANGE_CELL_TARGET,
      x,
      y
    };
  };
  const throwBomb = (string, x, y) => {
    return {
      type: THROW_BOMB,
      string,
      x,
      y
    };
  };
  // arguments come from state (from PlayCell)
  const opponentAboutToPlay = (matrix, previousHit, hittingMoves) => {
    return (dispatch) => {
  //callback
      opponentMove(matrix, previousHit, hittingMoves, ({string, x, y, message, positionArray, sinkShip, shipOrientation, newStage}) => {
        dispatch({
          type: OPPONENT_PLAY,
          // callback arguments go to reducer changes
          string, x, y, message, positionArray, sinkShip, shipOrientation, newStage
        })
      })
  
    }
  }
  const playAgain = () => {
    return {
      type: PLAY_AGAIN
    };
  };
  export {selectShip, changeShipOrientation, changeSelectedCell, placeShipOnBoard, relocateShip,
     opponentSetup, changeCellTarget, throwBomb, opponentAboutToPlay, playAgain};