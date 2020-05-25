import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import * as fetchAPI from '../services/movies-api';
import { v4 as uuidv4 } from 'uuid';
import FilmsList from '../components/FilmsList/FilmsList';

class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetchAPI.fetchTrendingMovies().then(response => {
      this.setState({ films: response });
      console.log(this.state); ////////////////////////////
    });
  }

  render() {
    const { films } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        {!!films && <FilmsList films={films} />}
      </>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
