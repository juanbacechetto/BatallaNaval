import React from 'react';
import Board from './Board';
import MyShips from '../containers/MyShips';
import MessageToPlayer from '../containers/MessageToPlayer';
import '../styles/gameTitle.css';


const GameTitle = () => (
    <div className='App'> 
        <div className='titleBox'>
            <h2 className='title'>Battleship Game</h2>
        </div>
        <div className='left-side'>
            <MyShips />
        </div>
        <div className="middle-side">
            <Board />
            <MessageToPlayer />
        </div>
    </div>
);
export default GameTitle;