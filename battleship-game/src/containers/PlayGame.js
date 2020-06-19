import React from 'react';
import {connect} from 'react-redux';
import GameBoard from '../components/GameBoard';
import YourGameBoard from './YourGameBoard';
import checkShips from '../helpers/checkShips';
import MessageYourTurn from './MessageYourTurn';
import '../styles/gameTitle.css';

let PlayGame = (props) => {
  let test = checkShips(props.ships);
// takes you to setup if not all ships are placed - Check again
  if (!test) {
    props.history.replace({
      pathname: '/'
    });
  }
  return (
    <div className='App'>
      <div className='left-side'>
        <YourGameBoard />
      </div>
      <div className="middle-side">
        <GameBoard />
        <MessageYourTurn />

      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ships: state.ships
  };
};
PlayGame = connect(mapStateToProps)(PlayGame);
export default PlayGame;
