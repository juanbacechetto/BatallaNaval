import './App.css';
import React from 'react';
import GameInstructions from './components/GameIntructions';
import Board from './components/Board';
import MyShips from './containers/MyShips';
import MessageToPlayer from './containers/MessageToPlayer';
import './styles/gameTitle.css';

const App = () => (
  <div className='App'>
    <div className='titleBox'>
      <h2 className='title'>Battlefield Game</h2>
      <p>Use the instructions to place your ships and play the game!</p>
    </div>
    <div className='left-side'>
      <GameInstructions />
      <MyShips />
    </div>
    <div className="middle-side">
      <Board />
      <MessageToPlayer />
    </div>
  </div>
);
export default App;
