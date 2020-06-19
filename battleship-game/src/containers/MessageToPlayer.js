import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {opponentSetup} from '../actions/actionsCreators';
import checkShips from '../helpers/checkShips';
import '../styles/messages.css';

let MessageToPlayer = (props)=> {

  const startGame = () => {
    props.opponentSetup();
  }

  let messageToPlayer;
  if (props.gamePhase === -1) {
    messageToPlayer = 'Place your ships to start the game!';
  }

  let btnStart = null;
  // Check if all ships are placed
  if (checkShips(props.ships)) {
    btnStart = (
      <Link to='/play_game'>
        <button className='buttonStart' onClick={startGame}>Start the game</button>
      </Link>
    );
  }
  return (
    <div>
      {btnStart}
    </div>
  );
};
const mapStateToProps = (state)=> {
  return {
    gamePhase: state.gamePhase,
    ships: state.ships
  };
};
const mapDispatchToProps = (dispatch)=> {
  return {
    opponentSetup: () => {
      dispatch(opponentSetup())
    }
  };
};
MessageToPlayer = connect(mapStateToProps, mapDispatchToProps)(MessageToPlayer);
export default MessageToPlayer;
