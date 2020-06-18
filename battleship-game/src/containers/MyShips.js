import React from 'react';
import Ship from './Ships';
import ShipOrientation from './ShipOrientation';
import '../styles/ships.css';
import {connect} from 'react-redux';

// creates the list of ships and the toggle button
let Ships = (props)=> {
  return <div className='toggleButton'>
    <h3 className='caption'>These are your ships</h3>
    <ShipOrientation />
    <div className='ships'>
      {props.ships.map((ship, index)=> (
          <Ship
            shipIndex={index}
            key={ship.id}
          />
        ))}
    </div>
  </div>
};
//mesw toy Redux 8a perastei to props.ships kai to selectedShipIndex
const mapStateToProps = (state)=> {
  return {
    ships: state.ships,
    selectedShipIndex: state.selectedShipIndex
  };
}
Ships = connect(mapStateToProps)(Ships);
export default Ships;
