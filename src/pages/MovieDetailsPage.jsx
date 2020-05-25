import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// Components
import MovieDetailsInfo from '../components/MovieDetailsInfo/MovieDetailsInfo';
import * as fetchAPI from '../services/movies-api';

class MovieDetailsPage extends Component {
  state = { film: {} };

  componentDidMount() {
    console.log(this.props);
    fetchAPI
      .fetchMovieById(this.props.match.params.movieId)
      // .then(console.log)
      .then(response => {
        this.setState({ film: response });
        // console.log(this.state);
      });
  }

  render() {
    return (
      <>
        {/*<h1>Movie details page</h1>*/}
        <MovieDetailsInfo
          film={this.state.film}
          genres={this.state.film.genres}
        />
        <Link to={`/movie/${this.state.film.id}/credits`}>Credits</Link>
        {/*<Route path={"movie/:movieId/credits"} component={}*/}
      </>
    );
  }
}

export default MovieDetailsPage;
