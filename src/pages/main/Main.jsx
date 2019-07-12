import React, { Component } from 'react';
import Card from '../../components/cards/Card';
import Pagination from '../../components/pagination/Pagination';
import API from '../../services/API';
import './Main.css';
import Loading from '../../components/loading/Loading';

export default class Main extends Component {
  state = {
    page: 1,
    characters: [],
    loading: false,
    maxPages: 1,
    firstResquest: true,
  };
  componentDidMount = () => {
    this.loadPersons(this.state.page);
  };

  loadPersons = page => {
    this.setState({ loading: true });
    API.get(`/people/?page=${page}`)
      .then(response => {
        const { results } = response.data;
        if (this.state.firstResquest) {
          const { count } = response.data;
          const maxPages =
            (count - (count % 10)) / 10 + (count % 10 > 0 ? 1 : 0);
          this.setState({ maxPages: maxPages, firstResquest: false });
        }
        this.setState({ characters: results });
      })
      .catch(() => {
        console.log('Error requesting characters');
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  previousPage = () => {
    let page = this.state.page - 1;
    if (page < 1) {
      page = this.state.maxPages;
    }
    this.refreshPage(page);
  };

  nextPage = () => {
    let page = this.state.page + 1;
    if (page > this.state.maxPages) {
      page = 1;
    }
    this.refreshPage(page);
  };

  specificPage = newPage => {
    this.refreshPage(newPage);
  };

  refreshPage = page => {
    this.setState({ page: page });
    this.loadPersons(page);
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="main-body">
        <Loading active={this.state.loading} />
        {characters.map(character => (
          <Card
            cardName={character.name}
            textBtn="More"
            linkImg="https://i.pinimg.com/originals/53/59/f4/5359f460edcccaf32941e0b4e090d9ac.png"
            id={character.url.replace(/[^\d]/g, '')}
          />
        ))}
        <Pagination
          previous={this.previousPage}
          next={this.nextPage}
          currentPage={this.state.page}
          totalPages={this.state.maxPages}
          specificPage={this.specificPage}
        />
      </div>
    );
  }
}
