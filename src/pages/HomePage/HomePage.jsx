import React, { Component } from 'react';
import * as fetchAPI from '../../services/movies-api';
import { pageTitle } from './HomePage.module.css';
// Components
import FilmsList from '../../components/FilmsList/FilmsList';

export default class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetchAPI.fetchTrendingMovies().then(response => {
      this.setState({ films: response });
    });
  }

  render() {
    const { films } = this.state;
    return (
      <>
        <h1 className={pageTitle}>Trending today</h1>
        {films && <FilmsList films={films} />}
      </>
    );
  }
}
