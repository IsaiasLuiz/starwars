import React from 'react';
import './StarShip.css';

export default class StarShip extends React.Component {
  render() {
    const shipInfo = this.props.info;
    return (
      <div className="star-ship">
        <h1>Information StarShip</h1>
        <h2>Name: {shipInfo.name}</h2>
        <ul>
          <li>
            Model: 
            {shipInfo.model}
          </li>
          <li>
            Length: 
            {shipInfo.length}
          </li>
          <li>
            Cargo Capacity: 
            {shipInfo.cargo_capacity}
          </li>
          <li>
            Consumables: 
            {shipInfo.consumables}
          </li>
          <li>
            Cost in credits: 
            {shipInfo.cost_in_credits}
          </li>
          <li>
            MGLT: 
            {shipInfo.MGLT}
          </li>
          <li>
            Crew: 
            {shipInfo.crew}
          </li>
          <li>
            Hyperdrive: 
            {shipInfo.hyperdrive}
          </li>
          <li>
            Manufacture: 
            {shipInfo.manufacture}
          </li>
          <li>
            Max atmospheringspeed: 
            {shipInfo.max_atmosprheringspeed}
          </li>
          <li>
            Passengers: 
            {shipInfo.passengers}
          </li>
          <li>
            Starship class: 
            {shipInfo.starship_class}
          </li>
        </ul>
      </div>
    );
  }
}
