import React, { Component } from 'react';
import queryString from 'query-string';
import * as fetchAPI from '../services/movies-api';
// Components
import FilmsList from '../components/FilmsList/FilmsList';
import SearchForm from '../components/SearchForm/SearchForm';

const getParsedSearchQuery = props =>
  queryString.parse(props.location.search).query;

class MoviesPage extends Component {
  state = {
    query: '',
    films: [],
    pageNumber: 1,
  };

  componentDidMount() {
    const searchQuery = getParsedSearchQuery(this.props);

    if (!searchQuery) return;

    fetchAPI.fetchMoviesByName(searchQuery).then(response => {
      this.setState({ films: response.results });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      fetchAPI.fetchMoviesByName(this.state.query).then(response => {
        this.setState({ films: response.results });
      });
    }
  }

  onSubmit = query => {
    this.props.history.push({
      ...this.props.location.pathname,
      search: `query=${query}`,
    });
    this.setState({ query: query });
  };

  render() {
    const { films } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        {!!films && <FilmsList films={films} />}
      </>
    );
  }
}

export default MoviesPage;
