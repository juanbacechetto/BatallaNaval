import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import {playAgain} from '../actions/actionsCreators';

let MessageYourTurn = (props) => {
  let hitMessage = '';
  let endMessage = '';

  const playOneMore = () => {
    props.playAgain();
    props.history.push({
      pathname: '/'
    });
  }


  if (props.gamePhase === 2) {
    hitMessage = ' You are the winner!';
    endMessage = (
      <button className='buttonStart' onClick={playOneMore}>Reload</button>
    );
  } else if (props.gamePhase === 3) {
    hitMessage = ' Computer wins!';
    endMessage = (
      <button className='buttonStart' onClick={playOneMore}>Reload</button>
    );
  } else {
    endMessage = (
      <button className='buttonStart' onClick={playOneMore}>Surrender</button>
    );
  }

  return (
    <div className='message'>
      {props.opponentTurn}
      {hitMessage}
      {endMessage}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    gamePhase: state.gamePhase,
    isYourTurn: state.isYourTurn,
    didYouMiss: state.didYouMiss,
    opponentTurn: state.opponentTurn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    playAgain: () => {
      dispatch(playAgain())
    }
  };
};
MessageYourTurn = connect(mapStateToProps, mapDispatchToProps)(MessageYourTurn);
export default withRouter(MessageYourTurn);
