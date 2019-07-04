import React, { Component } from "react";
import Card from "../../components/cards/Card";
import Pagination from '../../components/pagination/Pagination'
import API from "../../services/API";
import "./Main.css";
import Loading from "../../components/loading/Loading";

export default class Main extends Component {
  state = {
    page: 1,
    characters: [],
    loading: false
  };
  componentDidMount = () => {
    this.setState({ loading: true });
    API.get(`/people/?page${this.state.page}`)
    .then(response => {
      const { results } = response.data;
      this.setState({ characters: results });
    })
    .catch(() => {
      console.log("error");
    })
    .finally(() => {
      this.setState({ loading: false });
    });
  };
  
  render() {
    const { characters } = this.state;
    return (
      <div className="main-body">
        <Loading active={this.state.loading} />
        {characters.map(character =>(
          console.log(character), 
          <Card
            cardName={character.name}
            textBtn="More"
            linkImg="https://i.pinimg.com/originals/53/59/f4/5359f460edcccaf32941e0b4e090d9ac.png"
            id={character.url.replace(/[^\d]/g,"")}
          />
          ))}
          <Pagination/>
      </div>
    );
  }
}
