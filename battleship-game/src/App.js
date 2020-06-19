import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GameTitle from './components/GameTitle';
import PlayGame from './containers/PlayGame';
import './styles/gameTitle.css';

//Need to use "exact path" to avoid that renders all url that contains "/"

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={GameTitle}/> 
      <Route exact path='/play_game' component={PlayGame}/>
    </Switch>
  </Router>
);
export default App;
