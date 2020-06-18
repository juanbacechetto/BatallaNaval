import React from 'react';
import {connect} from 'react-redux';
import GameBoard from '../components/GameBoard';
import PlayInstructions from '../components/PlayInstructions';
import YourGameBoard from './YourGameBoard';
import checkShips from '../helpFunctions/checkShips';
import '../styles/gameTitle.css';

let PlayGame = (props) => {
  let test = checkShips(props.ships);
// takes you to setup if not all ships are placed - Check again
  if (!test) {
    props.history.replace({
      pathname: '/setup'
    });
  }
  return (
    <div className='App'>
      <div className='titleBox'>
        <h2 className='title'>Battlefield Game</h2>
        <p>Use the instructions to play the game!</p>
      </div>
      <div className='left-side'>
        <PlayInstructions />
        <YourGameBoard />
      </div>
      <div className="middle-side">
        <GameBoard />

      </div>
      <div className='right-side'>
        <MessageYourTurn />
        {/* <ChatRoom /> */}
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
