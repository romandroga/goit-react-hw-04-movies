import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { filmLink, card, cardImage, cardTitle } from './FilmCard.module.css';

const FilmCard = ({ poster, title, id, location }) => (
  <Link
    to={{
      pathname: `movies/${id}`,
      state: { from: location },
    }}
    className={filmLink}
  >
    <div className={card}>
      <img className={cardImage} src={poster} alt="movie poster" />
      <p className={cardTitle}>{title}</p>
    </div>
  </Link>
);

FilmCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(FilmCard);
