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
    characterImage:
      'data:image/jpeg;base64,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',
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
        this.setState({ loading: false });
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
      <div className="character-content">
        <Loading active={this.state.loading} />
        <div className="character">
          <img src={this.state.characterImage} />
          <ul className="physical-data">
            <li>
              <h3>Name: {character.name}</h3>
            </li>
            <li>Height: {character.height}</li>
            <li>Mass: {character.mass}</li>
            <li>Eye Color: {character.eye_color}</li>
            <li>Gender: {character.gender}</li>
            <li>Hair Color: {character.hair_color}</li>
            <li>Skin Color: {character.skin_color}</li>
          </ul>
        </div>
        <div className="star-ships">
          {this.state.starShips.map(starShip => (
            <StarShip info={starShip} />
          ))}
        </div>
      </div>
    );
  }
}
