import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Components
import Navigation from './components/Navigation/Navigation';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';

const AsyncHomePage = lazy(
  () => import('./pages/HomePage/HomePage') /* webpackChunkName: "home-page" */,
);
const AsyncMovieDetailsPage = lazy(
  () =>
    import(
      './pages/MovieDetailsPage/MovieDetailsPage'
    ) /* webpackChunkName: "movie-details" */,
);
const AsyncMoviesPage = lazy(
  () => import('./pages/MoviesPage') /* webpackChunkName: "movies-page" */,
);

const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<LoadingIndicator />}>
      <Switch>
        <Route path="/" exact component={AsyncHomePage} />
        <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
        <Route path="/movies" component={AsyncMoviesPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
