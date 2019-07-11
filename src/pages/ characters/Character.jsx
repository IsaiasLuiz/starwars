import React, { Component } from 'react';
import Loading from '../../components/loading/Loading';
import StarShip from '../../components/ starShips/starShip';
import axios from 'axios';
import API from '../../services/API';
import './Character.css';

export default class Character extends Component {
  state = {
    loading: false,
    character: {},
    starShips: [],
  };
  componentDidMount = () => {
    this.setState({ loading: true });
    const { pathname } = this.props.location;
    const id = pathname.split('').pop();
    API.get(`/people/${id}`)
      .then(response => {
        const { data } = response;
        this.setState({ character: data });
        this.loadStarShips();
      })
      .catch(() => {
        console.log('Error fetching information from a character');
      });
  };

  loadStarShips = () => {
    const { starships } = this.state.character;
    for (const star of starships) {
      this.getStarShips(star);
    }
  };

  getStarShips = async URL => {
    axios
      .get(URL)
      .then(response => {
        const starShips = this.state.starShips;
        starShips.push(response.data);
        this.setState({ starShips: starShips });
        console.log(response.data);
      })
      .catch(() => {
        console.log('Error fetching information from star ships');
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const character = this.state.character;
    return (
      <div className="character">
        <Loading active={this.state.loading} />
        <ul className="physical-data">
          <li>Name: {character.name}</li>
          <li>Height: {character.height}</li>
          <li>Mass: {character.mass}</li>
          <li>Eye Color: {character.eye_color}</li>
          <li>Gender: {character.gender}</li>
          <li>Hair Color: {character.hair_color}</li>
          <li>Skin Color: {character.skin_color}</li>
        </ul>
        <div className="star-ships">
          {this.state.starShips.map(starShip => (
            <StarShip info={starShip} />
          ))}
        </div>
      </div>
    );
  }
}
