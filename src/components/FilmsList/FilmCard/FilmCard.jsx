import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as fetchAPI from '../../../services/movies-api';
import styles from './FilmCard.module.css';

class FilmCard extends Component {
  // Сделать заглушку для фильмов, у которых нет постеров
  render() {
    const { poster, title } = this.props;
    return (
      <div className={styles.card}>
        <img
          className={styles.cardImage}
          src={`https://image.tmdb.org/t/p/w780${poster}`}
        />
        <p>{title}</p>
      </div>
    );
  }
}

FilmCard.propTypes = {};

export default FilmCard;
