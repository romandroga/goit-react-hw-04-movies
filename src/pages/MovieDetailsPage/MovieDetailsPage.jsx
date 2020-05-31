import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route } from 'react-router-dom';
import * as fetchAPI from '../../services/movies-api';
import { linksWrapper, link, linkActive } from './MovieDetailsPage.module.css';
// Components
import MovieDetailsInfo from '../../components/MovieDetailsInfo/MovieDetailsInfo';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

const AsyncCredits = lazy(
  () =>
    import(
      '../../components/Credits/Credits'
    ) /* webpackChunkName: "credits" */,
);
const AsyncReviews = lazy(
  () =>
    import(
      '../../components/Reviews/Reviews'
    ) /* webpackChunkName: "reviews" */,
);

export default class MovieDetailsPage extends Component {
  state = { film: {}, from: null };

  componentDidMount() {
    const { state } = this.props.location;
    if (state) this.setState({ from: state.from });

    const { movieId } = this.props.match.params;

    fetchAPI.fetchMovieById(movieId).then(response => {
      this.setState({ film: response });
    });
  }
  handleGoBack = () => {
    const { history } = this.props;

    if (this.state.from) {
      const { pathname, search } = this.state.from;
      history.push(`${pathname}${search}`);
      return;
    }
    history.push('/');
  };

  render() {
    const { film } = this.state;
    const { path, url } = this.props.match;

    return (
      <>
        <MovieDetailsInfo
          film={film}
          genres={film.genres}
          onGoBack={this.handleGoBack}
        />
        <div className={linksWrapper}>
          <NavLink
            className={link}
            activeClassName={linkActive}
            to={`${url}/credits`}
          >
            Credits
          </NavLink>
          <NavLink
            className={link}
            activeClassName={linkActive}
            to={`${url}/reviews`}
          >
            Reviews
          </NavLink>
        </div>
        <Suspense fallback={<LoadingIndicator />}>
          <Route path={`${path}/credits`} component={AsyncCredits} />
          <Route path={`${path}/reviews`} component={AsyncReviews} />
        </Suspense>
      </>
    );
  }
}
