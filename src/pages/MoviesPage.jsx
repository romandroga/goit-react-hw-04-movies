import React, { Component } from 'react';
import * as fetchAPI from '../services/movies-api';
import { getParsedSearchQuery } from '../services/utilities';
// Components
import FilmsList from '../components/FilmsList/FilmsList';
import SearchForm from '../components/SearchForm/SearchForm';

export default class MoviesPage extends Component {
  state = {
    query: '',
    films: [],
  };

  componentDidMount() {
    const searchQuery = getParsedSearchQuery(this.props);
    if (!searchQuery) return;

    fetchAPI.fetchMoviesByName(searchQuery).then(response => {
      this.setState({ films: response.results });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const searchQuery = getParsedSearchQuery(this.props);

    if (prevState.query !== this.state.query) {
      fetchAPI.fetchMoviesByName(searchQuery).then(response => {
        this.setState({ films: response.results });
      });
    }
  }

  onSubmit = data => {
    const { history, location } = this.props;

    history.push({
      ...location.pathname,
      search: `query=${data}`,
    });
    this.setState({ query: data });
  };

  render() {
    const { films } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        {films && <FilmsList films={films} />}
      </>
    );
  }
}
