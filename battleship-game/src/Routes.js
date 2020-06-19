import React from 'react';
import {Route} from 'react-router-dom';
import App from './App';
import PlayGame from './containers/PlayGame';

const Routes = () => (
  <div>
{/* without exact matches whatever follows the path as well  */}
    <Route path='/setup' component={App}/>
    <Route path='/play_game' component={PlayGame}/>
  </div>
);
export default Routes;