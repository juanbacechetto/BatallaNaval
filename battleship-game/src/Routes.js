import React from 'react';
import {Route} from 'react-router-dom';
import GameTitle from './components/GameTitle';
import PlayGame from './containers/PlayGame';

const Routes = () => (
  <div>
{/* without exact matches whatever follows the path as well  */}
    <Route path='/' component={GameTitle}/>
    <Route path='/play_game' component={PlayGame}/>
  </div>
);
export default Routes;