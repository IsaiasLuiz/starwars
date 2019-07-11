import React from 'react';
import './StarShip.css';

export default class StarShip extends React.Component {
  render() {
    const shipInfo = this.props.info;
    return (
      <div>
        <ul>
          <li>Name: {shipInfo.name}</li>
          <li>Model: {shipInfo.model}</li>
          <li>Length: {shipInfo.length}</li>
          <li>Cargo Capacity: {shipInfo.cargo_capacity}</li>
        </ul>
      </div>
    );
  }
}
